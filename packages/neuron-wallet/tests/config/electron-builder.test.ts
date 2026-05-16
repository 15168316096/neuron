import fs from 'fs'
import path from 'path'

describe('electron-builder config', () => {
  it('uses the FUSE 3 AppImage toolset for Linux AppImage builds', () => {
    const config = fs.readFileSync(path.join(__dirname, '..', '..', 'electron-builder.yml'), 'utf8')

    expect(config).toMatch(/^toolsets:\n {2}appimage: "1\.0\.2"$/m)
    expect(config).toMatch(/^linux:\n[\s\S]*?^ {2}target:\n {4}- AppImage$/m)
  })
})
