import React, { Component, useEffect } from "react";
import "./modal.css";


export default function Modal(props) {
    

    return <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Modal title</h4>
                    </div>
                    <div className="modal-body">
                        This is modal content!
                    </div>
                    <div className="modal-footer">
                        <button className="button">Close</button>
                    </div>
                </div>
            </div>
    

}