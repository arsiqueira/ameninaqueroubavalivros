 // Função para garantir que apenas uma música toque por vez
 const audios = document.querySelectorAll('audio');
        
 function showLyrics(audioElement) {
     // Pausa todos os áudios antes de iniciar um novo
     audios.forEach(audio => {
         if (audio !== audioElement) {
             audio.pause();
             audio.currentTime = 0;  // Reinicia o áudio pausado
         }
     });

     // Oculta todas as letras
     document.querySelectorAll('.lyrics').forEach(lyrics => lyrics.style.display = 'none');

     // Exibe a letra correspondente
     const lyricsId = audioElement.getAttribute('data-lyrics');
     document.querySelector(lyricsId).style.display = 'block';
 }
 