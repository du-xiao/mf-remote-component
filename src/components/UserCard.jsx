export default function UserCard({ name, age }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: 20,
      borderRadius: 10,
      width: 260
    }}>
      <h3>用户卡片</h3>
      <p>姓名：{name}</p>
      <p>年龄：{age}</p>
    </div>
  );
}

