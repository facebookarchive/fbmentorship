# KATKI YAPMA

Katkılar, ne kadar büyük veya küçük olduğuna bakılmaksızın her zaman memnuniyetle karşılanır. Katkı yapmadan önce, lütfen okuyunuz [code of conduct](CODE_OF_CONDUCT.md).

Katkı yapabileceğiniz iki alan vardır:

1. Açık kaynak eğitiminizin bir parçası olmak.
1. Tüm mentorluk içeriğini iyileştirmek.

## İş Akışı ve Teşvik İstekleri

Teşvik isteklerinize aktif olarak açığız.

1. Repoyu kopyalayın ve branşınızı `master`dan yaratın.
1. Eğer test edilmesi gereken bir kod eklediyseniz, testleri ekleyin ve test kurgusunu geçtiğinden emin olun.
1. Dökümantasyon düzeltmeleri yaptıysanız, sizi severiz!
1. Teslerin Circle CI'den geçtiğinden emin olun.

## Kod Değişikliklerini Test Etme

Eğer kod değişikliği yaptıysanız, teşvik isteğini yolladığınızda değişiklikleri nasıl test ettiğinizi detaylandırmanızı bekleriz.

Buraya link gönderebilirsiniz [JSFiddle](https://jsfiddle.net/) çalışan testinizi gösterebilirsiniz. İşte size bir örnek [sum functionality](https://jsfiddle.net/caabernathy/5mz4qusa/).

Eğer yeni işlevsellik eklediyseniz, bu dosyaya yeni bir test eklemenizi bekleriz `js/__tests__` . Bunlar [Jest](http://facebook.github.io/jest/) testleridir. Örnek olarak mevcut testlere bakınız.

Jest'e aşina değilseniz ve/veya yüklemeye hazır değilseniz, testi yine de ekleyin. Sürekli integrasyon testleri (Circle CI ile) kontrol için çalışacaktır. Testleriniz başarısız olursa, PR kabul edilmeyecektir.

Alternatif olarak, Jest'i kurabilir ve lokal test kurgusunu yürüttüğünüz teşvik isteklerinde yer verdiğiniz için aferin alın. 

**Jest testi kurulumu**

Aşağıdakini sadece bir kez yapmanız gerekiyor:

1. Yükleyin [Brew](http://brew.sh/)
2. Node yükleyin
```sh
brew install node
```
3. Watchman yükleyin
```sh
brew install watchman
```
4. Yarn yükleyin
```sh
npm install -g yarn
```


Bu bellek için ilgisayarınızdaki en üst düzey dosyaya gidin ve aşağıdaki komutu çalıştırın:

```sh
yarn install
```

**Jest testlerini çalıştırmak**

Üst düzey dosyanızda, ne zaman değişikliklerinizi test etmek isterseniz aşağıdakini çalıştırın:

```sh
yarn test
```
Aşağıdakine benzer bir şey görmeniz gerekiyor:

```sh
$ yarn test
Using globally installed version of Yarn
yarn test v0.21.2
$ jest
 PASS  js/__tests__/sum.test.js
  ✓ adds 1 + 2 to equal 3 (2ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.816s, estimated 1s
Ran all test suites.
✨  Done in 1.68s.
```
Daha fazla test eklendikçe daha fazla listelenmiş test göreceksiniz.

#### Web sitesi değişiklikleri için ek iş akışları

Bir dökümantasyonda veya web sitesinde değişiklik yapıyorsanız, web sitesi dosyasını test edin ve değişiklikleriniz düzgün gösteriliyor mu diye kontrol etmek için sunucuyu çalıştırın. 

1. Web sitenizin dizininin yerini tespit edin ve `yarn` yazarak herhangi bir web sitesine ait destek dosyalarını yükleyin. Aşağıdaki adımlar bu amaçla kök dizinden yapmak için izlenmelidir. 
   ```sh
   cd website
   yarn
   ```
2. Web sitesi dizininde `yarn start`ı çalıştırarak yaptığınız değişikliklerin düzgün gösterilip gösterilmediğini kontrol etmek için gelişim sunucusu çalıştırabilirsiniz.

## Katılan Lisans Anlaşması("KLA")
Bir eğitim içeriğini geliştirmek için gelen bir teşvik isteğini kabul etmek için, KLA'yı kabul etmenize ihtiyacımız var. Bunu sadece Facebook'un herhangi bir açık kaynaklı projesinde çalışmadan önce bir kere yapmanız gerekir.

KLA'nızı buradan tamamlayın: <https://code.facebook.com/cla>

## Lisans

Bu projeye katkıda bulunarak, katkılarınızın burada lisanslandırılacağını kabul etmiş oluyorsunuz [MIT license](LICENSE).
