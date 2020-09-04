
$(document).ready(() => {

    var storageI   = $("#_Storage")
    var memoryI    = $("#_MemoryG")
    var bandwidthI = $("#_Bndwdth")
    var cpucoreI   = $("#_CPUCore")

    var storageN   = $("#_stcounter")
    var memoryN    = $("#_mmcounter")
    var bandwidthN = $("#_bwcounter")
    var cpucoreN   = $("#_cccounter")
    var moneyyyN   = $("#_mncounter")
    var mailtobN   = $("#_mtbutton")
    

    function updateMony(){
        moneyyyN.text((Number(storageI.val())*0.1 + Number(memoryI.val())*1.5 + Number(bandwidthI.val())*0.5 + Number(cpucoreI.val())*2).toFixed(2));
        mailtobN.attr("href", `mailto:lovescock@cock.email&subject=Custom%20plan%20request&body=Storage%3A%20${storageI.val()}GB%0AMemory%3A%20${memoryI.val()}GB%0ABandwidth%3A%20${bandwidthI.val()}MB%0ACPU%20Cores%3A%20${cpucoreI.val()}%0A%0ATotal%20price%3A%20${moneyyyN.text()}`)
    }

    storageN.text(storageI.val())
    memoryN.text(memoryI.val())
    bandwidthN.text(bandwidthI.val())
    cpucoreN.text(cpucoreI.val())
    updateMony()

    storageI.on('input',()    => {
        storageN.text(storageI.val())
        updateMony()
    })
    memoryI.on('input',()     => {
        memoryN.text(memoryI.val())
        updateMony()
    })
    bandwidthI.on('input',() => {
        bandwidthN.text(bandwidthI.val())
        updateMony()
    })
    cpucoreI.on('input',()     => {
        cpucoreN.text(cpucoreI.val())
        updateMony()
    })

})

