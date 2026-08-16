"use client";

import { useEffect, useState } from "react";


type JournalNote = {
  id: string;
  title: string;
  content: string;
};



export default function JournalPage() {


  const [notes, setNotes] =
    useState<JournalNote[]>([]);


  const [selectedId, setSelectedId] =
    useState<string | null>(null);


  const [content, setContent] =
    useState("");


  const [showSave, setShowSave] =
    useState(false);


  const [newTitle, setNewTitle] =
    useState("");





  useEffect(() => {


    const saved =
      localStorage.getItem(
        "journal-notes"
      );


    if(saved){

      const parsed =
        JSON.parse(saved);

      setNotes(parsed);


      if(parsed.length > 0){

        setSelectedId(
          parsed[0].id
        );

        setContent(
          parsed[0].content
        );

      }

    }


  }, []);







  useEffect(() => {


    if(!selectedId){
      return;
    }



    const updated =
      notes.map(
        note =>
          note.id === selectedId
            ? {
                ...note,
                content,
              }
            : note
      );



    setNotes(updated);


    localStorage.setItem(
      "journal-notes",
      JSON.stringify(updated)
    );


  }, [content]);







  function createNote(){


    if(!newTitle.trim()){
      return;
    }



    const note = {

      id:
        Date.now().toString(),

      title:
        newTitle,

      content:
        "",

    };



    const updated = [
      ...notes,
      note,
    ];



    setNotes(updated);


    setSelectedId(
      note.id
    );


    setContent("");



    localStorage.setItem(
      "journal-notes",
      JSON.stringify(updated)
    );



    setNewTitle("");

    setShowSave(false);


  }







  function selectNote(
    note:JournalNote
  ){

    setSelectedId(
      note.id
    );

    setContent(
      note.content
    );

  }







  function deleteNote(
    id:string
  ){

    const updated =
      notes.filter(
        note =>
          note.id !== id
      );



    setNotes(updated);



    localStorage.setItem(
      "journal-notes",
      JSON.stringify(updated)
    );



    setSelectedId(null);

    setContent("");

  }






  const selected =
    notes.find(
      note =>
        note.id === selectedId
    );







  return (

    <main
      className="
        min-h-screen
        text-white
      "
    >


      <div
        className="
          flex
          gap-8
        "
      >



        {/* Sidebar */}


        <aside
          className="
            w-72
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-6
          "
        >


          <h1
            className="
              text-3xl
              font-light
            "
          >

            📓 Journal

          </h1>




          <button

            onClick={() =>
              setShowSave(true)
            }

            className="
              mt-6
              w-full
              rounded-2xl
              bg-emerald-600
              px-4
              py-3
              transition
              hover:bg-emerald-500
            "

          >

            + New Note

          </button>





          <div className="mt-6 space-y-2">


            {
              notes.map(
                note => (

                  <button

                    key={note.id}

                    onClick={() =>
                      selectNote(note)
                    }

                    className={`
                      w-full
                      rounded-xl
                      p-3
                      text-left
                      transition
                      ${
                        selectedId === note.id
                          ? "bg-white/10"
                          : "hover:bg-white/5"
                      }
                    `}

                  >

                    {note.title}

                  </button>

                )
              )

            }


          </div>



        </aside>







        {/* Editor */}


        <section
          className="
            flex-1
            rounded-3xl
            border
            border-white/10
            bg-[#F5F2EB]
            p-8
            text-black
          "
        >



          {
            selected ?

            (

              <>

                <div
                  className="
                    flex
                    justify-between
                  "
                >

                  <h2
                    className="
                      text-3xl
                    "
                  >

                    {selected.title}

                  </h2>


                  <button

                    onClick={() =>
                      deleteNote(
                        selected.id
                      )
                    }

                    className="
                      text-sm
                      text-red-600
                    "

                  >

                    Delete

                  </button>


                </div>



                <textarea

                  value={content}

                  onChange={(e)=>
                    setContent(
                      e.target.value
                    )
                  }

                  className="
                    mt-8
                    h-[500px]
                    w-full
                    resize-none
                    bg-transparent
                    outline-none
                    text-lg
                  "

                  placeholder="Start writing..."

                />


              </>

            )

            :

            (

              <p className="text-black/40">

                Select a note or create a new one.

              </p>

            )


          }


        </section>



      </div>







      {
        showSave &&


        <div
          className="
            fixed
            inset-0
            flex
            items-center
            justify-center
            bg-black/60
          "
        >


          <div
            className="
              rounded-3xl
              bg-[#111]
              p-8
            "
          >

            <h2
              className="
                text-2xl
                text-white
              "
            >

              Save as

            </h2>



            <input

              value={newTitle}

              onChange={(e)=>
                setNewTitle(
                  e.target.value
                )
              }

              className="
                mt-5
                rounded-xl
                bg-white/10
                p-3
                text-white
                outline-none
              "

              placeholder="Note name"

            />



            <button

              onClick={createNote}

              className="
                ml-3
                rounded-xl
                bg-emerald-600
                px-5
                py-3
              "

            >

              Save

            </button>


          </div>


        </div>


      }



    </main>

  );

}