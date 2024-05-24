const WriteYourBook = () => {
  return (
    <div className="mx-auto text-center mt-6">
      <div>
        <h1 className="text-5xl">Write Your own books here</h1>
      </div>
      <form>
        <div className="mt-6">
          <textarea
            className="textarea textarea-info w-[600px] h-96"
            placeholder="We are Waiting....."
          ></textarea>
        </div>
        <div>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn btn-neutral"
            onClick={() => {
              document.getElementById("my_modal_5").showModal();
              event.preventDefault();
            }}
          >
            Submit
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                In order write your own book, you will need to sign up first.
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </form>
    </div>
  );
};

export default WriteYourBook;
