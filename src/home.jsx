import './App.css'
import { Link } from 'react-router-dom'

import lpGreen from './assets/images/LP_green.png'
import lpOrange from './assets/images/LP_orange.png'
import lpRed from './assets/images/LP_red.png'
import cassetteOlive from './assets/images/cassette-olive.png'
import cassetteOrange from './assets/images/cassette-orange.png'
import cassetteRed from './assets/images/cassette-red.png'
import radioGreenWood from './assets/images/radio_green_wood_transparent.png'

const channels = [
  { code: 'CH.01', title: '성결 멋사 ON AIR', color: '#730C02', cassette: cassetteRed },
  { code: 'CH.02', title: '캠퍼스 주파수', color: '#7B8055', cassette: cassetteOlive },
  { code: 'CH.03', title: '페스티벌 라디오', color: '#E77B49', cassette: cassetteOrange },
]

const notices = ['첫 참여 1회 무료', '재도전 1회 500원', '채널별 1·2등 상품']

function RankingRow({ rank }) {
  return <li className="ranking-row"><span className="rank-number">0{rank}</span><div className="rank-copy"><strong>기록 대기</strong></div><time>--.--초</time></li>
}

function Home() {
  return <main className="home-page">
    <div className="hero-viewport is-ready">
      <header className="home-header"><div className="brand-line" aria-label="서비스 정보"><strong>LIKELION TYPING</strong><span aria-hidden="true">/</span><span>성결대학교 축제 부스</span></div></header>
      <section className="hero-section" aria-labelledby="home-title">
        <img className="hero-lp" src={lpRed} alt="" aria-hidden="true" />
        <img className="hero-lp-green" src={lpGreen} alt="" aria-hidden="true" />
        <img className="hero-lp-orange" src={lpOrange} alt="" aria-hidden="true" />
        <img className="hero-radio" src={radioGreenWood} alt="" aria-hidden="true" />
        <div className="hero-copy"><h1 id="home-title">멋쟁이 타자처럼</h1><p className="hero-description">당신의 타자로 완성하는 오늘의 방송</p></div>
      </section>
    </div>

    <section className="content-section" aria-label="방송 정보">
      <div className="participation-board" aria-label="참여 안내"><div className="board-heading"><strong>참여 안내</strong></div><ul>{notices.map((notice) => <li key={notice}><strong>{notice}</strong></li>)}</ul></div>
      <div className="home-layout">
        <section className="intro-panel">
          <section className="channel-section" aria-labelledby="channel-title">
            <div className="section-heading"><h2 id="channel-title">오늘의 방송 편성표</h2></div>
            <div className="channel-grid">{channels.map((channel) => <article className="channel-card" key={channel.code} style={{ '--channel-color': channel.color }}>
              <img className="cassette-art" src={channel.cassette} alt="" aria-hidden="true" />
              <div className="channel-card-head"><span className="channel-code">{channel.code}</span></div>
              <div className="channel-title-row"><h3>{channel.title}</h3></div>
              <div className="frequency-line" aria-hidden="true"><span /><i /><span /><i /><span /><i /><span /><i /><span /></div>
              <span className="channel-duration">5문장 · 약 1분</span>
            </article>)}</div>
          </section>
          <div className="home-actions"><Link className="primary-button" to="/select">게임 시작</Link><button className="secondary-button" type="button">랭킹 보기</button></div>
        </section>

        <aside className="ranking-panel" aria-labelledby="ranking-title">
          <div className="ranking-header"><h2 id="ranking-title">실시간 TOP 3</h2></div>
          <ol className="ranking-list">{[1, 2, 3].map((rank) => <RankingRow key={rank} rank={rank} />)}</ol>
          <div className="ranking-note"><strong>랭킹 안내</strong><p>참가자별·채널별 최고 기록만 반영됩니다.</p><a href="#ranking-title">전체 랭킹 보기</a></div>
        </aside>
      </div>
    </section>
  </main>
}

export default Home
