import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import SanPham from './components/SanPham/SanPham';
// import SinhVien from './components/SinhVien/SinhVien';
class App extends Component{
  render() {
    return(
      <div className="App" >
        <header className="App-header">
      <h1>Ứng dụng React đầu tiên</h1>
        <p>Đến từ nguyễn Văn Quý</p>
 <SanPham maSanPham='001'  tenSanPham='Huwai' gia='10000000VNĐ' />
   Máy đắc và mau hư
   <SanPham maSanPham='001' tenSanPham='Oppo' gia='100000000VNĐ' />
   Máy chụp ảnh đẹp 
   <SanPham maSanPham='001' tenSanPham='Iphone' gia='120000000VNĐ' />
   Máy lướt facebook tốt
   <SanPham maSanPham='001' tenSanPham='Samsung' gia='150000000VNĐ' />
   Máy chơi game k đc
   <SanPham maSanPham='001' tenSanPham='Nokia' gia='11000000VNĐ' />
   Đôi chó chết tươi
   </header>
      </div>

      
    );
  }   

};
export default App;
