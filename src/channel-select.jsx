import { Fragment, useState } from 'react'
import './channel-select.css'

import headsetOrange from './assets/images/headset_orange.png'
import lpGreen from './assets/images/LP_green_hq.png'
import lpOrange from './assets/images/LP_orange_hq.png'
import lpRed from './assets/images/LP_red_hq.png'
import micRed from './assets/images/mic_red.png'
import radioGreen from './assets/images/radio_green.png'
import selectionArrow from './assets/images/selection-arrow.png'

const channels = [
  { code: 'CH.01', title: '성결 멋사 ON AIR', description: '성결대학교 · 멋쟁이사자처럼 · 캠퍼스 스토리', sentence: '오늘의 성결대학교 축제 방송을 시작합니다.', color: '#730C02', icon: micRed, lp: lpRed },
  { code: 'CH.02', title: '캠퍼스 주파수', description: '다른 대학 · 캠퍼스 · 청춘 · 교류', sentence: '서로 다른 캠퍼스의 이야기가 하나의 주파수로 이어집니다.', color: '#7B8055', icon: headsetOrange, lp: lpGreen },
  { code: 'CH.03', title: '페스티벌 라디오', description: 'Festival · Music · Radio · Night', sentence: '음악이 흐르는 축제의 밤을 함께 기록해 보세요.', color: '#E77B49', icon: radioGreen, lp: lpOrange },
]

function FrequencyLine() {
  return <div className="frequency-line" aria-hidden="true">{[0, 1, 2, 3, 4].map((point) => <Fragment key={point}><b />{point < 4 && <i />}</Fragment>)}</div>
}

function ChannelSelect({ onStart, onPrevious }) {
  const [selectedCode, setSelectedCode] = useState(channels[0].code)
  const selectedChannel = channels.find(({ code }) => code === selectedCode)

  return <main className="channel-select-page" style={{ '--theme-point': selectedChannel.color }}>
    <header className="channel-select-header">
      <div className="masthead"><strong>LIKELION TYPING</strong><span aria-hidden="true">/</span><span>성결대학교 축제 부스</span></div>
      <span className="step-label">02 / 03</span>
    </header>

    <section className="channel-select-title" aria-labelledby="channel-select-title"><p>오늘의 방송</p><h1 id="channel-select-title">게임 테마를 선택하세요</h1></section>

    <section className="channel-select-layout" aria-label="게임 테마 선택">
      <article className="selected-channel-card">
        <div className="lp-stage" aria-hidden="true"><img className="selected-lp" src={selectedChannel.lp} alt="" /></div>
        <div className="selected-channel-copy" style={{ '--channel-icon': `url(${selectedChannel.icon})` }}>
          <span className="selected-channel-code">{selectedChannel.code} / 선택됨</span>
          <div className="selected-channel-heading"><h2>{selectedChannel.title}</h2></div>
          <p className="selected-channel-description">{selectedChannel.description}</p>
          <div className="sentence-example"><span>문장 예시</span><p>“{selectedChannel.sentence}”</p></div>
          <div className="selected-channel-meta"><span>5문장</span><span>약 1분</span><span>기록 경쟁</span></div>
          <FrequencyLine />
          <span className="selected-channel-icon" aria-hidden="true" />
        </div>
      </article>

      <aside className="channel-options" aria-label="채널 목록">
        <p className="channel-options-label">채널 선택</p>
        <div className="channel-option-list">{channels.map((channel) => {
          const isSelected = channel.code === selectedCode
          return <button className={`channel-option${isSelected ? ' is-selected' : ''}`} key={channel.code} type="button" onClick={() => setSelectedCode(channel.code)} aria-pressed={isSelected} style={{ '--channel-color': channel.color }}>
            {isSelected && <img className="selection-arrow" src={selectionArrow} alt="" aria-hidden="true" />}
            <span className="channel-option-topline"><span>{channel.code}</span>{isSelected && <b>✓ 선택됨</b>}</span>
            <span className="channel-option-title">{channel.title}<img src={channel.icon} alt="" /></span>
            <span className="channel-option-description">{channel.description}</span>
          </button>
        })}</div>
      </aside>
    </section>

    <footer className="channel-select-actions"><button className="text-button" type="button" onClick={onPrevious}>이전</button><button className="start-button" type="button" onClick={() => onStart?.(selectedChannel)}>이 테마로 시작</button></footer>
  </main>
}

export default ChannelSelect
