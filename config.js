// BAD_YOVI/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['0773883257', 'BAD_YOVI/', true],
  ['0773883257', 'BAD_YOVI/', true], 
  [''] 
] //Number of owners

global.mods = ['94773883257','94773883257'] 
global.prems = ['94773883257', '94773883257', '94773883257']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['BrunoSobrino']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = '💖BAD_YOVI/💖'
global.premium = 'true'
global.packname = '💖BAD_YOVI/💖' 
global.author = '💖BAD_YOVI/💖' 
global.igfg = ' BAD_YOVI/' 
global.dygp = 'https://chat.whatsapp.com/JyyF8F0Au1K9P6uaYLI6iI'
global.fgsc = 'https://chat.whatsapp.com/JyyF8F0Au1K9P6uaYLI6iI' 
global.fgyt = 'https://chat.whatsapp.com/JyyF8F0Au1K9P6uaYLI6iI'
global.fgpyp = 'https://chat.whatsapp.com/JyyF8F0Au1K9P6uaYLI6iI'
global.fglog = 'https://avatars.githubusercontent.com/u/134716496?v=4.jpg' 


global.wait = '*💝 _ටිකක් ඉන්න Uploading by 💖BAD_YOVI/ 💖...*'
global.rwait = '💫'
global.dmoji = '🎠'
global.done = '✅'
global.error = '⚠️' 
global.xmoji = '💚' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
