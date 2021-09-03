const db = require('../db')
const fs = require('fs')
jest.mock('fs')

describe('db', () => {
    afterEach(() => {
      fs.clearMocks()
    })
    it('can read', async () => {
        const data = [{title: 'task', done: true}]
        fs.setReadFileMock('/xxx', null, JSON.stringify(data))
        const list = await db.read('/xxx')
        expect(list).toStrictEqual(data)
    })
    it('can write', async () => {
        let fakeFile
        const data = [{title: 'buy water', done: true}, {title: 'buy cookie', done: true}]
         fs.setWriteFileMock('/yyy', (path, data, callback) => {
             fakeFile = data
             callback(null)
         })
        await db.write(data, '/yyy')
        expect(fakeFile).toBe(JSON.stringify(data) + '\n')
    })
})