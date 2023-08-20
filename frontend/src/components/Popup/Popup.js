
import React from "react";

class Popup extends React.Component {
    render() {
        return  (this.props.appear) ? (
        <div id="myPopup" class="popup">
        <div class="popup-content">
            {this.props.children}
            <button id="closePopup">
                  Close
              </button>
        </div>
    </div>
        ): "";
    }
}

export default Popup;