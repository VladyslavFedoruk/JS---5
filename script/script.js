 //Мінімум

 /*Створи об'єкт, що описує автомобіль
(виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, 
середня витрата палива на 100 км., водії),і наступні методи для роботи 
з цим об'єктом:
 */

 let car = {
     owner: 'Audi',
     model: 'RS7',
     yearOfLaunch: 2023,
     middleSpeed: 160,
     petrolTank: 90,
     averageFuelWaste: 15,
     drivers: [],


     ///1 - Метод, який виводить на екран інформацію про автомобіль.
     //  showInfo() {
     //      console.log(`Производитель: ${car.owner}`);
     //      console.log(`Модель:${car. model}`);
     //      console.log(`Год выпуска:${car.yearOfLaunch}`);
     //      console.log(`Средняя скорость:${car.middleSpeed}`);
     //      console.log(`Обьем бензобака:${car.petrolTank}`);
     //      console.log(`Средний расход:${car.averageFuelWaste}`);
     //      console.log(` Водители:${car.drivers}`);
     //  },

     showInfo() {
         for (let key in this) {
             if (typeof (this[key]) !== 'function') {
                 console.log(`${key} = ${this[key]}`)
             }
         }
     },

     //2 - Додавання ім’я водія у список
     nameDriver(name) {
         this.drivers = name;
     },
     // 3-  Перевірка водія на наявність його ім’я у списку
     showName(name) {
         for (let i = 0; i < car.drivers.length; i++) {
             if (name === car.drivers[i]) {
                 console.log(`Yes, ${name} is excisted`);
             } else {
                 console.log('Sorry');
             }
         }
     },
     // 4 - Підрахунок необхідного часу та кількості палива для подолання
     // переданої відстані з середньою швидкістю.Враховуй, що через кожні 4
     //години дороги водієві необхідно робити перерву на 1 годину.
     avFuelWaste(dist) {
         return (dist / 100 * car.averageFuelWaste)
     },
     avTime(dist) {
         if ((dist / car.middleSpeed) / 4 >= 1) {
             return ((dist / car.middleSpeed) + ((dist / car.middleSpeed) / 4))
         } else {
             return (dist / car.middleSpeed)
         }
     },
 }

 car.showInfo();
 car.nameDriver('Nikolay');
 car.showInfo();
 car.showName("Nikolay");
 let dist = 210;

 console.log(`Average Fuel Waste: ${Math.floor(car.avFuelWaste(dist))} ltrs`);
 console.log(`Time to pass distance: ${(car.avTime(dist)- (car.avTime(dist) - Math.floor(car.avTime(dist))))} and ${Math.floor((car.avTime(dist) - Math.floor(car.avTime(dist)))*60)} minutes`);




 //Норма
 /*Створити об'єкт, що описує час (години, хвилини, секунди), і
 такі функції для роботи з цим об'єктом:
 */

 let time = {
     hours: 12,
     minutes: 32,
     seconds: 40,

     //1 - Для виведення часу на екран.
     displayTime() {
         console.log(`Время: ${time.hours}:${time.minutes}:${time.seconds} `)
     }
 }
 time.displayTime();