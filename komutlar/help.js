const Discord = require("discord.js");
const moment = require("moment");
const colors = require("colors");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("asciidoc", `⇝ Kişisel komutlar | Not:Komutlar ? ile baslar. | Daha Fazlası İçin ?yardım/?help
        • Eglence Komutlari		
• Arkadasin :: Arkadasini Bilir.
• Atatürk	:: Atatürk ile ilgili mesaj verir.	
• kaçcm    :: Kac Cm Oldunu Yazar.
• kedi      :: Kedi Fotografi Gosterir.
• köpek     :: Kopek Resmi Cikarir.
• twerk     :: Dene Gor :D
        • Bilgi Komutlari		
• değişiklikler   :: Sunucuda Yapilan değişiklikleri gosterir.
• istatistik      :: Bot Istatistiligini Gosterir.
• sunucubilgi     :: Sunucu Bilgisini Gosterir.
• yapimcim         :: Bot Yapimcisini Gosterir.
• davet           :: Davet Link Verir.
		• Moderasyon Komutlari		
• anket :: Anket Acar		
• ban   :: İstediğiniz kişiyi sunucudan yasaklar.
• kick    :: İstediğiniz kişiyi sunucudan atar.
• sustur  :: İstediğiniz kişiyi susturur.
• temizle :: Mesajları siler.
• uyar    :: İstediğiniz kişiye uyarı verir.
        • Minecraft Komutlari	
• mcödül  :: Istediniz Yaziyi Minecraft Basarisina Dondurur.
        •  Genel			
• ailemiz  :: Bot Kac Sunucuda Oldunu Gosterir.				
• komutlar :: Tüm komutları listeler.
• ping     :: Botun pingini gösterir.
• duyuru   :: Sunucunuzda duyuru yapmanızı sağlar.
• avatarım :: Avatarini Gosterir
    Sayfa 1 / 1 | Yapımcım: ! Cenk Alper#2854`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['komutlar', 'help', 'yardim', 'yardım', 'kullanımlar', 'komutyardım', 'hp', 'ytr', 'sd', 'kd'],
  permLevel: 0
};

exports.help = {
  name: 'komutlar',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'komutlar'
};