### Angular'ın çalışma mantığı;

index.html çalıştırıldığında, bundle edilmiş olan angular javascript kodu yüklenir.

  > "ng build" shell komutu ile yazılmış olan tüm .ts dosyaları tekil bir javascript dosyasına dönüştürüp index.html içerisine ekler. Bu işlem development ortamında "ng serve" komutu ile uygulama çalıştırılırken otomatik yapılırken; production'a yüklenecek olan kodda developer tarafında bir kez çalıştırılması gerekmektedir.

javascript kodu ilk olarak main.ts dosyasını çalıştırır.
  > .ts uzantılı dosyalar, sadece developer için nesne yönelimine yakın bir kod yazma deneyimi sağladığı için kullanılmakta)

```typescript
  bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
```
main.ts içerisindeki bu kod AppComponent sınıfını(class) ve uygulama genelinde kullanılacak olan route'u yükler.

> route: kullanıcıların bir URL'ye erişmek istediğinde yapılan işlemleri tanımlamadır. Rotalar, uygulamada farklı bileşenleri (components) ve görünümleri değişik URL'lerle ilişkilendirmenizi sağlar. 

AppComponent içerisinde ve daha sonra oluşturlacak olan componentler için @Component decorator kullanır.
```typescript
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
```
Component'ler üç farklı dosyadan meydana gelirler. Html, css ve typescript kodları

Bu örnekte app.component.html kullanılmış. Bu html dosyası app.component.ts dosyasında yazılan kodları kullanarak data manipülasyonu yapabilmektedir.

- selector: 'app-root'
  > Bu bileşenin HTML etiketi veya bileşen seçicisi 'app-root' olarak tanımlanmaktadır. Bu, bu bileşenin <app-root></app-root> etiketi ile kullanılabileceği anlamına gelir.
  > <app-root> tag'i index.html içerisinde <body><body> içerisine yazılarak çağrılmakadır.
  > Böylece index.html ilk kez çalştığında, selectör ismi "app-root" olan componentin bağlı olduğu html'i body içerisine gömer. Tanımlanmış olan css dosyasına sadece bu component bazında etkili olacak şekilde çalışır.
  > 
- imports: [RouterOutlet, CommonModule, TranslateModule]
  > uygulama genelinde yüklenmesini istediğimiz module'leri buraya yazıyoruz. Her component kendi içerisinde başka modulleri çağırabilir. Performanslı olması için tüm modüller aynı anda hafızaya yüklenmez. Açılacak olan sayfa hangi component'lerden oluşuyorsa onun ihtiyacı olan moduller yüklenir.   


app.component.html içerisindeki <router-outlet /> kodu component.ts'deki RouterOutlet yardımıyla url'de kullanıcının gitmek istediği yolu anlayarak ilişkili componenti app.component.html içerisine gömer.
  > İlişkilendirme tanımlaması app.routes.ts içerisinde yapılmaktadır. 

```typescript
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

```
> tanımlamış olduğum kodda "localhost:4200/" adresi HomeComponent'e yönlenir. AppComponent'te olduğu gibi html, css ve ts dosyalarını yükler. 

