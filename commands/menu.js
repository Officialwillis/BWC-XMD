const {
  zokou
} = require(__dirname + "/../framework/zokou");
const moment = require("moment-timezone");
const readmore = String.fromCharCode(0x200e).repeat(0xfa0);
zokou({
  'nomCom': "menu",
  'categorie': "General"
}, async (_0x593f38, _0x153b4b, _0x43d096) => {
  let {
    ms: _0x54897c,
    repondre: _0x27b0f3,
    prefixe: _0x27bba3,
    nomAuteurMessage: _0x3db2ae
  } = _0x43d096;
  let {
    cm: _0x1ecba2
  } = require(__dirname + "/../framework/zokou");
  var _0x441ecd = {};
  _0x1ecba2.map(_0x4a2ebc => {
    if (!_0x441ecd[_0x4a2ebc.categorie]) {
      _0x441ecd[_0x4a2ebc.categorie] = [];
    }
    _0x441ecd[_0x4a2ebc.categorie].push(_0x4a2ebc.nomCom);
  });
  moment.tz.setDefault("Africa/Nairobi");
  const _0x493178 = moment().format("HH:mm:ss");
  const _0x4cc470 = moment().format('DD/MM/YYYY');
  const _0x3bb663 = moment().hour();
  let _0x45ed97 = '';
  if (_0x3bb663 >= 0x5 && _0x3bb663 < 0xc) {
    _0x45ed97 = "🌅☀️ 𝗚𝗼𝗼𝗱 𝗺𝗼𝗿𝗻𝗶𝗻𝗴! 𝗛𝗼𝗽𝗲 𝘆𝗼𝘂 𝗵𝗮𝘃𝗲 𝗮 𝗳𝗮𝗻𝘁𝗮𝘀𝘁𝗶𝗰 𝗱𝗮𝘆! 🌞";
  } else {
    if (_0x3bb663 >= 0xc && _0x3bb663 < 0x11) {
      _0x45ed97 = "☀️😎 𝗚𝗼𝗼𝗱 𝗮𝗳𝘁𝗲𝗿𝗻𝗼𝗼𝗻! 𝗦𝘁𝗮𝘆 𝗲𝗻𝗲𝗿𝗴𝗶𝘇𝗲𝗱! 🌿";
    } else if (_0x3bb663 >= 0x11 && _0x3bb663 < 0x15) {
      _0x45ed97 = "🌆✨ 𝗚𝗼𝗼𝗱 𝗲𝘃𝗲𝗻𝗶𝗻𝗴! 𝗛𝗼𝗽𝗲 𝘆𝗼𝘂 𝗵𝗮𝗱 𝗮 𝗴𝗿𝗲𝗮𝘁 𝗱𝗮𝘆! 🌙";
    } else {
      _0x45ed97 = "🌙😴 𝗚𝗼𝗼𝗱 𝗻𝗶𝗴𝗵𝘁! 𝗦𝘄𝗲𝗲𝘁 𝗱𝗿𝗲𝗮𝗺𝘀! 💫";
    }
  }
  let _0x5b7931 = "\n\n" + readmore + " 𝗔𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀";
  for (let _0x228323 in _0x441ecd) {
    _0x5b7931 += "\n\n*" + _0x228323 + "*\n";
    _0x5b7931 += _0x441ecd[_0x228323].map(_0x2bd28a => "- " + _0x27bba3 + _0x2bd28a).join("\n");
  }
  let _0x108a5c = "\n╭┈┈┈┈┈╮\n│  ʙᴡᴄ-xᴍᴅ ɴᴇxᴜs\n├┈┈┈┈•➤\n│ 🕵️ ᴜsᴇʀ ɴᴀᴍᴇ: " + _0x3db2ae + "\n│ 📆 ᴅ𝗮𝘁𝗲: " + _0x4cc470 + "\n│ ⏰ ᴛ𝗶𝗺𝗲: " + _0x493178 + "\n│ 👪 ʙᴡᴄ ᴜsᴇ𝗿s: " + '0+' + "\n╰┈┈┈┈┈╯\n" + _0x45ed97 + "\n\n" + _0x5b7931;
  try {
    await _0x153b4b.sendMessage(_0x593f38, {
      'gif': {
        'url': 'https://files.catbox.moe/640han.mp4'
      },
      'caption': _0x108a5c,
      'footer': "*BWC-XMD*, developed by kingtech",
      'contextInfo': {
        'forwardingScore': 0x3e7,
        'isForwarded': false
      }
    }, {
      'quoted': _0x54897c
    });
  } catch (_0x317e32) {
    console.log("🥵 Error sending image: " + _0x317e32);
    _0x27b0f3("🥵 Error sending image: " + _0x317e32);
  }
  try {
    await _0x153b4b.sendMessage(_0x593f38, {
      'audio': {
        'url': "https://files.catbox.moe/3zrare.mp3"
      },
      'mimetype': "audio/mpeg",
      'ptt': false
    }, {
      'quoted': _0x54897c
    });
  } catch (_0x4b8b63) {
    console.log("🥵 Error sending audio as voice note: " + _0x4b8b63);
    _0x27b0f3("🥵 Error sending audio as voice note: " + _0x4b8b63);
  }
});