/* eslint-env jest */
import { setup, teardown, getFile } from '../jest/test.utils'
const fs = require('fs')
let chrome = null

beforeAll(() => { chrome = setup() })
afterAll(async () => { await teardown(chrome) })

test('+++ home renders correctly (visual)', async () => {
  await chrome.goto(global.config.baseUrl).wait('.content')
  const data = await chrome.screenshot()

  expect(data).toMatchImageSnapshot()
})

test('+++ home div renders correctly (visual)', async () => {
  await chrome.goto(global.config.baseUrl).wait('.content')
  const data = await chrome.screenshot('#something')

  expect(data).toMatchImageSnapshot()
})
