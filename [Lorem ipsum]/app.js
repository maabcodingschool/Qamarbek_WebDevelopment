const text = [
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum alias blanditiis facilis necessitatibus dicta! Exercitationem rem labore id autem eum qui! Nisi consequuntur omnis accusantium ducimus, non quas quae at vitae ratione esse eius delectus sed eaque pariatur dolorum totam laborum reiciendis repellat obcaecati accusamus voluptatum aliquid est. Dolor beatae esse laborum asperiores! Veniam officiis beatae accusamus vel quos cum cumque, possimus quam incidunt. Laudantium ut alias architecto vero? Doloribus atque maiores animi maxime eos aliquam sequi. Molestiae suscipit ipsum ex molestias tempora iure, dicta velit doloribus dolorum mollitia quasi soluta possimus voluptates sed assumenda quas repellat itaque ea? Velit.`,
    `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum in praesentium, molestias doloremque atque exercitationem error illum culpa accusantium aut voluptates quia consequatur reiciendis neque expedita porro odio quas. Laborum rem sed eveniet explicabo, iste, necessitatibus molestiae minus vitae sapiente, quos adipisci debitis ipsa a quo quas libero aperiam perferendis dolore distinctio eos recusandae hic. Adipisci quod ducimus possimus, iure est, aliquam quaerat hic porro nisi ipsam animi impedit tempore distinctio rem, ad quo in veniam fugit provident autem. Eum hic odio mollitia minus praesentium. Sequi aliquam fugit delectus ad.`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repellat illo mollitia est voluptatem quo asperiores repudiandae aspernatur nam eius, quam aut rerum nulla deserunt ab impedit totam! Aspernatur voluptate in laudantium consectetur, molestias a blanditiis magnam soluta rerum mollitia, atque corrupti praesentium minus repudiandae quisquam nobis recusandae? Omnis sunt sit nulla! Nulla cumque corporis, numquam adipisci dolore dolorem rerum voluptatum explicabo nihil voluptas. Veniam numquam exercitationem quia tempore quidem magnam placeat consequuntur molestias totam accusantium temporibus maiores fuga, modi accusamus libero, error animi, quis deserunt neque eum doloremque facilis quasi nesciunt. Perspiciatis, quidem molestias assumenda voluptas repellat harum nobis. Cum dolor illo et qui corrupti suscipit cumque. Aspernatur, a?`,
    `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quibusdam inventore quaerat minus nemo non eos minima tempore harum optio velit quo magni, cum adipisci accusantium. Sit non sed nobis quae numquam similique! Veniam veritatis suscipit possimus, autem eius eos ex debitis aut? Accusamus aliquid sunt eligendi laboriosam sequi. Debitis, quisquam possimus cum fugiat dolores exercitationem, neque placeat consequuntur libero natus, iure dolorum! Beatae obcaecati accusantium iure ducimus! Dignissimos nemo modi eaque vel eum! Quae nesciunt iste aut asperiores delectus.`
]

const form = document.querySelector('.lorem-form')
const amount = document.getElementById('amount')
const result = document.querySelector('.lorem-text')

form.addEventListener('submit', function(e) {
    e.preventDefault()
    const value = parseInt(amount.value)
    const random = Math.floor(Math.random()* text.length)
    
    if(isNaN(value) || value < 0 || value >9){
        result.innerHTML = `<p class="result">${text[random]}</p>`
    } else {
        let tempText = text.slice(0,value)
        tempText = tempText.map(function(item){
            return `<p class="result">${item}</p>`
        }).join('')
        result.innerHTML = tempText
    }
})