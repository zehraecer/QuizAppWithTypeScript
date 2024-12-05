# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# QuizAppWithTypeScript

Bu proje, React ve TypeScript kullanarak yapılan bir quiz uygulamasıdır. Kullanıcılar, soruları yanıtlayarak quizi tamamlayabilir ve sonuçlarını görüntüleyebilirler.

## Proje Kurulumu

Projeyi çalıştırmak için aşağıdaki adımları takip edebilirsiniz.

### 1. Projeyi Klonlayın

Öncelikle projeyi GitHub'dan bilgisayarınıza klonlayın:

```bash
git clone https://github.com/zehraecer/QuizAppWithTypeScript.git


## Kullanılan Teknolojiler

- **React**: Kullanıcı arayüzünü oluşturmak için React kullanılmıştır.
- **TypeScript**: Tip güvenliğini sağlamak ve daha güvenilir bir geliştirme süreci için TypeScript kullanılmıştır.
- **Vite**: Hızlı geliştirme ve hızlı yenileme sağlamak için Vite yapılandırması yapılmıştır.
- **CSS**: Uygulamanın stilini oluşturmak için basit CSS kullanılmıştır.


## Proje Yapısı

- **src/**: Tüm uygulama dosyalarının bulunduğu ana klasör.
- **components/**: React bileşenlerini içeren klasör.
- **data/**: Quiz soruları ve kategorilerin bulunduğu JSON verisini içeren dosya.
- **App.tsx**: Uygulamanın ana bileşeni.
- **index.tsx**: Uygulamanın başlangıç noktası.
- **styles/**: CSS dosyaları.

## Uygulama Özellikleri

- **Kategori Seçimi**: Kullanıcılar, çeşitli kategorilerden birini seçerek soruları başlatabilirler.
- **Sorular ve Cevaplar**: Her kategoriye ait sorular ve çoktan seçmeli cevaplar bulunmaktadır.
- **Yanıtlar ve Puanlama**: Kullanıcıların seçtikleri cevaplar doğrultusunda doğru/yanlış puanlama yapılır ve sonuçlar gösterilir.
- **Oyun Sonucu**: Kullanıcılar tüm soruları yanıtladıktan sonra başarı oranlarını ve doğru cevap sayılarını görebilirler.
- **Tekrar Başlatma**: Kullanıcılar, oyunu baştan başlatabilirler.
