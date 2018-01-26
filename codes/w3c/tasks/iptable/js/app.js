class IpTables {

  constructor(addresses, ipTableContent) {
    this.addresses = addresses
    this.ipTableContent = ipTableContent
  }

  addAddress(address) {
    if(this.hasAddress(address)){
      warningField.innerHTML = warningMessage
    } else {
      this.addresses.push(address)
      this.addRow(address)
    }
  }
  
  addRow(address) {
    const row = `<tr data-ip="${address.ip}">
      <td>${address.ip}</td>
      <td>${address.mask}</td>
      <td>${address.version}</td>
      <td>
        <i class="material-icons clear">clear</i>
        <i class="material-icons edit">mode_edit</i>
      </td>
    </tr>`
    
    this.ipTableContent.insertAdjacentHTML('beforeend', row)

    const clearButton = document.querySelector(`tr[data-ip='${address.ip}'] .clear`)
    clearButton.addEventListener('click', function (event) {
      let tr = clearButton.parentNode.parentNode
      this.removeAddress(tr, tr.dataset.ip)
      clearButton.blur()
    }.bind(this))
  }

  hasAddress(address) {
    return this.addresses.some(addressSelected => addressSelected.ip == address.ip)
  }

  removeAddress(tr, address) {
    tr.remove()
    this.addresses = this.addresses.filter(addressSelected => addressSelected.ip != address.ip)
  }

  render() {
    this.addresses.forEach(address => this.addRow(address))
  }

}

const button = document.querySelector('button')
const formAddIp = document.querySelector('form#add-ip')
const ipTableContent = document.querySelector('table#iptable tbody')
const warningField = document.querySelector('#warning')
const warningMessage =
  `<div class="alert alert-warning" role="alert">
      <strong>O endereço já foi adicionado.</strong>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>`
let iptables


fetch('data/addresses.json')
  .then(res => res.json())
  .then(addresses => {
    iptables = new IpTables(addresses, ipTableContent)
    iptables.render()
  })

button.addEventListener('click', function(event) {
  const formData = new FormData(formAddIp)
  const address = { 
    ip: formData.get('ip') || '-', 
    mask: formData.get('mask') || '-', 
    version: formData.get('version') || '-'
  }
  
  iptables.addAddress(address)

  event.preventDefault()
})
