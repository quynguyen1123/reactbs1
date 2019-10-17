import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';

import SinhVien from './components/SinhVien/SinhVien';
class App extends Component{
  render() {
    return(
      <div className="App" >
        <h1>Ứng dụng React đầu tiên</h1>
        <p>Đến từ nguyễn Văn Quý</p>
<SinhVien hoten='nguyen thi ' tuoi= '39' />
      </div>
      
    );
  }

};
export default App;
