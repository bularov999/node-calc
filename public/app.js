  const form = document.querySelector("#form")

  form.addEventListener("submit", async function (e) {
    e.preventDefault()
    const radioObj = {}
    const textObj = {}
    const checkboxObj = {}

    const radio = document.querySelectorAll('input[type="radio"]:checked')
    const text = document.querySelectorAll('input[type="text"]')
    const checkbox = document.querySelectorAll('input[type="checkbox"]:checked')

    radio.forEach(({name , value})=> {
      radioObj[name] = value
    })

    text.forEach(({name, value}) => {
      textObj[name] = value
    })

    checkbox.forEach(({value}) => {
      checkboxObj[value] = value
    })

    const data = {...radioObj, ...textObj, ...checkboxObj}
    const body = JSON.stringify(data)
    const response = await fetch('/api/post', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body,
    })
    const res = response.json()
    console.log(res)
  })
  
