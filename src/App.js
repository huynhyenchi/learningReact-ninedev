import logo from './logo.svg';
import './App.css';

function App() {
  // variables
  const greeting = 'Hi Elaina';
  // mảng
  const arrayNum = [1,2,3,4,5,6];
  const a = 3;
  // mảng có object
  const arr = [
    {
      name: 'Elaina Huynh',
      profession: 'Front-end Developer'
    },
    {
      name: 'Huynh Chi',
      profession: 'Front-end Developer'
    },
    {
      name: 'Huynh Yen Chi',
      profession: 'Front-end Developer'
    },
  ];

  const link = 'https://github.com/huynhyenchi'

  return ( //bắt đầu vào biểu thức return
    /*
    phần nằm giữa dấu Mở và Đóng của 1 thẻ thì được gọi là bên trong JSX - JavaScript XML (là cú pháp mở rộng của JS, giúp Dev viết cấu trúc giao diện người dùng giống HTML trong ReactJS hiệu quả)
    */
    <div className="App">
      {/* đã vào trong JSX, comment bên trong JSX thì được kí hiệu như vậy đấy */}
      {/* những dấu NGOẶC NHỌN dùng để NHÚNG JS vào trong JSX */}
      <h1>{greeting}</h1>
      <div>{arrayNum}</div>
      <div>{a}</div>
      <div>
        {arr.map((item, index) => (
          <div key={index}>
            <div>{item.name} - {index}</div>
            <div>{item.profession}</div>
          </div>
        ))}
      </div>

      <a href={link}>GitHub</a>
    </div>
  );
}

export default App;
