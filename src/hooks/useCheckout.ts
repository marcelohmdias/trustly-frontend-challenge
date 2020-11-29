export function useCheckout() {
  const { PayWithMyBank } = window as Record<string, any>

  function createTransaction(totalAmount: string) {
    PayWithMyBank.establish({
      accessId: 'D61EC9BAF0BB369B9438',
      merchantId: '1004314986',
      metadata: { demo: 'enabled' },
      currency: 'USD',
      paymentType: 'Deferred',
      amount: totalAmount,
      description: 'marcelohmdias@gmail.com',
      merchantReference: '66de4bdc502d7',
      returnUrl: '#success',
      cancelUrl: '#cancel'
    })
  }

  function addPanelListener(handler: (command: any, event: any) => void) {
    PayWithMyBank.addPanelListener(handler)
  }

  return { addPanelListener, createTransaction }
}
