//#1 Використати деструктуризацію об’єктів у всіх завданнях з попередньої ДЗ
console.log("1 Завдання");



//#2 Напиши сценарій керування особистим кабінетом інтернет-банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.
console.log("2 Завдання");
/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
//   };

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */
const account = {
    balance: 0,// Поточний баланс рахунку
    transactions: [], // Історія транзакцій
    countId: 1,
    /*
     * Метод створює і повертає об'єкт транзакції.
     * Приймає суму і тип транзакції.
     */
    createTransaction(amount, type) { // {amount: amount, type: type, id: id}
        const newTransactions = {
            amount: amount,
            type: type,
            id: this.countId,
        };
        this.countId += 1;
        return newTransactions;
    },
    /*
     * Метод відповідає за додавання суми до балансу.
     * Приймає суму танзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його в історію транзакцій
     */
    deposit(amount) { // Метод ,який додає гроші до рахунку
        this.balance += amount // Плюсує гроші до нашого балансу
        const transaction = this.createTransaction(amount, "deposit"); // Ми створюємо об'єкт транзакції
        this.transactions.push(transaction) // Запушили до масиву наш об'єкт транзакції
    },
    /*
     * Метод відповідає за зняття суми з балансу.
     * Приймає суму танзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його в історію транзакцій.
     *
     * Якщо amount більше, ніж поточний баланс, виводь повідомлення
     * про те, що зняття такої суми не можливо, недостатньо коштів.
     */
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Недостатньо коштів для зняття цієї суми.");
            return
        }
        this.balance -= amount // Мінусує гроші до нашого балансу
        const transaction = this.createTransaction(amount, "withdraw"); // Ми створюємо об'єкт транзакції
        this.transactions.push(transaction) // Запушили до масиву наш об'єкт транзакцій

    },
    /*
     * Метод повертає поточний баланс
     */
    getBalance() {
        return this.balance
    },
    /*
     * Метод шукає і повертає об'єкт транзакції по id
     */
    getTransactionDetails(id) {
        for(let i = 0; i < this.transactions.length; i+=1){
            const transaction = this.transactions[i];
            if (transaction.id === id){
                return transaction
            } 
        };
        return null
    },

    /*
     * Метод повертає кількість коштів
     * певного типу транзакції з усієї історії транзакцій
     */
    getTransactionTotal(type) {
        let total = 0;
        for(let i = 0; i < this.transactions.length; i+=1){
            const transaction = this.transactions[i]; //{amount: amount, type: type, id: id}
            if (transaction.type === type){
                total += transaction.amount
            } 
        };
        return total
    },
};

account.deposit(1000);
console.log("Ваш баланс після поповнення дорівнює:", account.getBalance());
account.withdraw(500)
console.log("Ваш баланс після зняття дорівнює:", account.getBalance());
account.withdraw(700)
console.log("Ваш баланс після зняття дорівнює:", account.getBalance());
account.deposit(12000);
console.log("Ваш баланс після поповнення дорівнює:", account.getBalance());
account.withdraw(7870)
console.log("Ваш баланс після зняття дорівнює:", account.getBalance());
account.deposit(100);
console.log("Ваш баланс після поповнення дорівнює:", account.getBalance());
account.withdraw(790)
console.log("Ваш баланс після зняття дорівнює:", account.getBalance());
account.withdraw(90)
console.log("Ваш баланс після зняття дорівнює:", account.getBalance());
const totalDepositTransactions = account.getTransactionTotal("deposit");
console.log("Загальна сума поповненнь дорівнює: ",totalDepositTransactions);
const totalWithdrawTransactions = account.getTransactionTotal("withdraw");
console.log("Загальна сума зняття дорівнює: ",totalWithdrawTransactions);
const detailsTransaction = account.getTransactionDetails(7);
console.log("Деталі транзакції:", detailsTransaction);
