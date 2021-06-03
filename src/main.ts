import './style.scss'

const hide = (el: Element | Element[]): void =>
  Array.isArray(el)
    ? el.forEach((item) => hide(item))
    : el.classList.remove('visible')

const show = (el: Element) => el.classList.add('visible')

const replace = (toHide: Element | Element[], toShow: Element) => {
  hide(toHide)
  show(toShow)
}

const mainFn = () => {
  const $ = document.querySelector.bind(document)
  const $$ = document.querySelectorAll.bind(document)

  const section1 = $('#section-1')!
  const section2 = $('#section-2')!
  const sectionYes = $('#section-yes')!
  const sectionNo = $('#section-no')!

  const btnStart = $('#start')!
  const btnYes = $('#yes')!
  const btnNo = $('#no')!
  const btnRepeatList = $$('.repeat')!

  const elements = [
    section1,
    section2,
    sectionYes,
    sectionNo,
    btnStart,
    btnYes,
    btnNo,
    ...Array.from(btnRepeatList)
  ]

  if (elements.some((e) => !e)) return

  btnStart.addEventListener('click', () => {
    replace(section1, section2)
  })

  btnYes.addEventListener('click', () => {
    replace(section2, sectionYes)
  })

  btnNo.addEventListener('click', () => {
    replace(section2, sectionNo)
  })

  btnRepeatList.forEach((btn) =>
    btn.addEventListener('click', () => {
      replace([sectionYes, sectionNo], section1)
    })
  )
}

document.addEventListener('DOMContentLoaded', mainFn)
