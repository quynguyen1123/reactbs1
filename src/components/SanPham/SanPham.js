import React from 'react';
//const inTuoi = () =>{
 // return Math.floor((Math.random() *100));
//}
const sanPham = (props) =>{
    return (
        <div>
            <p> Mã Sản Phẩm: {props.maSanPham} </p>
            <p>  Tên sản phẩm: {props.tenSanPham } </p>
            <p>  Giá: {props.gia } </p>
             <p>{props.children }</p>
            
        </div>
    );
}

export default sanPham;
