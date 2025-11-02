import './Card.css';
import avatarMale from './assets/images/avatar_male.png';

function App() {
  return (
    <main>
      <article className="card" role="article" aria-label="Практична №3">
        <div className="card__image">
          <div className="grid">
            <div className="wave-block"></div>
            <div className="wave-block"></div>
            <div className="blue-block first"></div>
            <div className="blue-block"></div>
            <div className="white-block"></div>
            <div className="blue-block col1"></div>
            <div className="pink-block col2"></div>
            <div className="pink-dots-block col3">
              <div className="dot"></div><div className="dot"></div>
              <div className="dot"></div><div className="dot"></div>
            </div>
            <div className="pink-dots-block col4">
              <div className="dot"></div><div className="dot"></div>
              <div className="dot"></div><div className="dot"></div>
            </div>
            <div className="white-g-block col5"></div>
            <div className="pink-block row4-col1"></div>
            <div className="yellow-block row4-col2"></div>
            <div className="pink-dots-block row4-col3">
              <div className="dot"></div><div className="dot"></div>
              <div className="dot"></div><div className="dot"></div>
            </div>
            <div className="pink-dots-block row4-col4">
              <div className="dot"></div><div className="dot"></div>
              <div className="dot"></div><div className="dot"></div>
            </div>
            <div className="white-g-block-inverted row5-col1"></div>
          </div>
        </div>

        <span className="card__chip">HTML &amp; CSS</span>
        <div className="card__date">Публікація 1 Вересня 2025</div>

        <h2 className="card__title">Практична №3</h2>

        <p className="card__desc">
          Мета практичної роботи полягає в тому, щоб налаштувати середовище розробки <b>VS&nbsp;Code</b>,
          а також реалізувати картку блогу для вдосконалення фундаментальних навичок з <b>HTML</b> та <b>CSS</b>.
        </p>

        <div className="card__footer">
          <div className="card__avatar">
            <img src={avatarMale} alt="Аватар користувача" />
          </div>
          <div className="card__author">Степаненко Даніїл</div>
        </div>
      </article>
    </main>
  );
}

export default App;
