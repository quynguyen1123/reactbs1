import React from 'react';
//const inTuoi = () =>{
 // return Math.floor((Math.random() *100));
//}
const sinhVien = (props) =>{
    return (
        <div>
            <p> {props.hoten}- Tuoi: {props.tuoi  } </p>
            <p> {props.hoten} - Tuoi: { props.tuoi } </p>
        </div>
    );
}

export default sinhVien;
