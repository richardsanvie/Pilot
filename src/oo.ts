class Pessoa {
    nome: string;
    renda?: number;

    constructor(nome: string, renda: number) {
        this.nome = nome;
        this.renda = renda;
    }

    dizOla(): string {
        return `${this.nome} disse oi`
    }
}

class ContaBancaria {
    protected saldo: number = 0;
    public numeroConta: number;

    constructor(numeroDaConta: number) {
        this.numeroConta = numeroDaConta;
    }

    getSaldo() {
        return this.saldo;

    }

    depositar(valor: number) {
        this.saldo += valor;
    }
    static retornaNumeroDoBanco(){
        return 124;
    } //disponível apenas na classe
}

class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo = valor * 2;
    }
}

const contaDoPedro = new ContaBancariaPessoaFisica(454545);
ContaBancaria.retornaNumeroDoBanco()