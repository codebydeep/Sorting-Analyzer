const bars = document.querySelectorAll('.bars span')
const btnToGenerateBars = document.getElementById('generateBars')


btnToGenerateBars.addEventListener('click', () => {
    bars.forEach((item) => {
        const barHeight = Math.floor(Math.random() * 200) + 20
        item.style.height = `${barHeight}px`
    })
})


const bubbleSort = async () => {
    for (let i = 0; i < bars.length - 1; i++) {
        for (let j = 0; j < bars.length - 1 - i; j++) {
            bars[j].style.backgroundColor = 'red'
            bars[j + 1].style.backgroundColor = 'red'
            
            await new Promise((resolve) => setTimeout(resolve, 100))
            
            const barHeight1 = parseInt(bars[j].style.height)
            const barHeight2 = parseInt(bars[j + 1].style.height)
            
            if (barHeight1 > barHeight2) {
                const tempHeight = bars[j].style.height
                bars[j].style.height = bars[j + 1].style.height
                bars[j + 1].style.height = tempHeight
            }
            
            bars[j].style.backgroundColor = 'blue'
            bars[j + 1].style.backgroundColor = 'blue'
        }
    }
}

// bubbleSort()