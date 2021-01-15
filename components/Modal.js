import React from "react";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.closeBtn = null;

    this.closeModal = () => {
      this.closeBtn.click();
    };

    this.submitModal = () => {
      alert("submitting Modal");
      this.closeModal();
    };
  }
  render() {
    return (
      <>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal">
          Create Movie
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"></button>
              </div>
              <div className="modal-body">{this.props.children}</div>
              <div className="modal-footer">
                <button
                  ref={(element) => (this.closeBtn = element)}
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal">
                  Close
                </button>
                {this.props.hasSubmit && (
                  <button onClick={submitModal} type="button" className="btn btn-primary">
                    Save changes
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
