// adaptee - this api is giving by SBI
class SBI {
  static sbiFetchFxFates(amount: number, source: string, destination: string) {
    return 0.67; // dummy values
  }
}

// adapter - this api is giving by JPM
class JPM {
  static fetchFxFates(source: string, destination: string, amount: number) {
    return 0.97; // dummy values
  }
}

interface IFXRates {
  fetchFxRates(source: string, destination: string, amount: number): number;
}

// adapter for SBI
class SBIAdapter implements IFXRates {
  fetchFxRates(source: string, destination: string, amount: number) {
    const conversionRate = SBI.sbiFetchFxFates(amount, source, destination);
    return conversionRate;
  }
}

// adapter for JPM
class JPMAdapter implements IFXRates {
  fetchFxRates(source: string, destination: string, amount: number) {
    const conversionRate = JPM.fetchFxFates(source, destination, amount);
    return conversionRate;
  }
}

// client
class FXRates {
  constructor(private adapter: IFXRates) {}

  setStrategy(adapter: IFXRates) {
    this.adapter = adapter;
  }

  fetchFxFates(amount: number, source: string, destination: string) {
    this.adapter.fetchFxRates(source, destination, amount);
  }
}
