// // this api is giving by sbi
// class SBIFXRates {
//   fetchFxFates(amount: number, source: string, destination: string) {
//     return 0.67; // dummy values
//   }
// }

// // this api is giving by JPM
// class JPMFXRates {
//   fetchFxFates(source: string, destination: string, amount: number) {
//     return 0.97; // dummy values
//   }
// }

// // your implemenatation
// class FXRates {
//   fetchFxFates(amount: number, source: string, destination: string) {
//     return amount * new JPMFXRates().fetchFxFates(source, destination, amount);
//   }
// }
