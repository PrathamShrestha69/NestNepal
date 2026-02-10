import React from 'react'
import WhatsappButton from './WhatsappButton'
import { Icon } from '@iconify/react'

const PricingAndFeatures = () => {
  return (
    <div className='flex lg:flex-row flex-col mt-30 font-[Helvetica]'>
      {/* 1st column */}
      <div className='flex flex-row ml-20 lg:ml-0 px-5 lg:px-0'>
        <div className='items-center justify-center text-center '>
          <h1 className='text-3xl'>Starter</h1>
          <p className='lg:mt-10 mt-5 text-xl gap-2'>Rs.<span className='text-7xl'>499</span><span className=
            'relative text-zinc-500 text-4xl'>
            <div className='h-[2px] w-16 rotate-[18deg] left-0  bg-red-700 absolute top-1/2  ' />
            560</span></p>
          <p className='text-zinc-500 mt-5 lg:mt-10'>per user / month,</p>
          <p className='text-zinc-500'>1 year commitment <span className='text-blue-500'>&#9432;</span> </p>
          <div className='items-center justify-center ml-7 mt-5'>
            <WhatsappButton text="Contact Sales" className='bg-[#F2527726] border-[#F25277] text-[#F25277] hover:bg-[#f0174a] hover:text-white transition-all duration-300 ease-in-out    ' />
          </div>
        </div>
        <div className='border bodrer-[0.1vw] border-zinc-200 w-px h-full ml-20' />
      </div>
      {/* 2nd column */}
      <div className='lg:ml-25 mt-15 ml-10'>
        <div className='flex flex-col gap-3'>
          <h1 className='font-bold py-3'>Storage</h1>
          <div className='text-center flex flex-row items-center gap-5'>
            <Icon icon="logos:google-drive" width={25}
              height={25} />
            <p><span className='font-bold'>30GB Pooled</span> Storage per user</p>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <h1 className='py-3 font-bold mt-3'>Communicate</h1>
          <div className='text-center flex flex-row items-center gap-5'>
            <Icon icon="logos:google-gmail" width={25}
              height={25} />
            <p>Secured & Personalized Gmail</p>
          </div>
          <div className='text-center flex flex-row items-center gap-5'>
            <Icon icon="logos:google-calendar" width={25}
              height={25} />
            <p>Always in Track with Schedule</p>
          </div>
          <div className='text-center flex flex-row items-center gap-5'>
            <Icon icon="logos:google-meet" width={25}
              height={25} />
            <p>HD Video Calls <span className='font-bold'>(100 Users)</span></p>
          </div>
          <div className='text-center flex flex-row items-center gap-5'>
            <div>
              <svg
                width={25}
                height={25}
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use href="#image0" transform="scale(0.015625)" />
                  </pattern>

                  <image
                    id="image0"
                    width={64}
                    height={64}
                    preserveAspectRatio="none"
                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAUVBMVEVMaXFMxIE5wmsUs0UluVNYxocUoD9CuWwArjYguWgArzkQrzqO2rBAwnoUrTojvmonu2sAhhsArjgAgBQCtDApw3QAtTsInTIAkiQZwGYAeg5o8bCQAAAAEHRSTlMAd1RBeUn7A/38+58jnrHSI7WAZwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAV5JREFUeJztl2FvgyAQhq/WcoC6KZ44+v9/6FLrJi4cMkjWLunz1dzDy0nIAfCU4DHxekhZJPapvRzSxtwnlUDHR+hcn4Dr2Pwupb5Xqg32AaFSSYLenThB/xJUiT2YfjQRvw55pgC3vzCxRBNc6pU3wbJT7AXY0A1rLc3XkWNQU1iAUJPUC1LP48AxDiooQGiF1OaOjQiGq5jCgjNJkyIYZ05gSgVUKpD/fwv0AEH/8ATTw0+iK03g9gJdKLDFAvl7QRVOYMwwpgjc+zYioJ/AWDmwl+J1ntyKuvhX4tlPYM0Hi+hWan9Ewb3AGMvS+Mt6gmo7BzHkJtjNaZgh2IEvAfxZD6SmOkGgJYcmER6R0RdI4hHe+ecEmpqaowoPt+ALbruMwEzo+C3Q1MSeK7y3uguW+liCA4HOrIdVkF0Pd4GmNywQ6KU+E4RWUP76sBiaOrsaNk1J8cFj9pn5BExslMOF9SfbAAAAAElFTkSuQmCC"
                  />
                </defs>

                <rect width={25} height={25} fill="url(#pattern0)" />
              </svg>
            </div>
            <p>Gossip Secretly in your Group</p>
          </div>
        </div>
      </div>
      {/* 3rd Column */}
      <div className='mt-15 lg:ml-25 ml-10'>
        <div className='flex flex-col gap-3'>
          <h1 className='font-bold py-3'>Collaborate</h1>
          <div className='text-center flex flex-row items-center gap-5'>
            <svg viewBox="0 0 48 48" width={25} height={25}>
              <path fill="#4285F4" d="M6 2h26l10 10v34a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
              <path fill="#FFF" d="M14 18h20v2H14zm0 6h20v2H14zm0 6h14v2H14z" />
            </svg>
            <p>Documents with Google Docs</p>
          </div>
          <div className='text-center flex flex-row items-center gap-5'>
            <svg width={"25"} height={"25"} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <rect width={"25"} height={"25"} fill="url(#pattern0_1_1399)" />
              <defs>
                <pattern id="pattern0_1_1399" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use href="#image0_1_1399" transform="scale(0.015625)" />
                </pattern>
                <image id="image0_1_1399" width="64" height="64" preserveAspectRatio="none" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAaVBMVEVMaXF61LAVpFkwt3wjq20ZqWIvtXllv6MHpFo4uoEXoFJCtXsdq2ZJv4kAp1wAo1YAqV8AplkBn0141bAElVX//P/t9PMAlz6d2L75+PozrWomrWiAzaWM17fF5tZCtnwxuHtlxZdVv4s2NxuKAAAADnRSTlMAnvqURqKUBP5Dv2a0TEMn87UAAAAJcEhZcwAACxMAAAsTAQCanBgAAAJiSURBVHicrZfReqMgEIUN2ZQk3Z0BUkyM0Wje/yH3AxRRQSZtz9VcOL9nzlBsioIkTnvq38d+v99/rPVJAvC/IKxAgJUcpbodxcNBxAUCu2aXA/CCs3WncyJU11xyHnhxEoiIC8QEuOxyDk5CILOQETNzkCNwAxBCoGBT/xywTeAeIIJR5oBNAh8yGBVzcNlKkk8ZdD4IWAIu6W3ycQQMglgD0h64BwwDxB2kc+DF6WgJ3ap/Dkh54IMDbyIIYQ5IeOAegDaBMERAFgLiBD6OMMQ4J6jnLUfgxelo/prHM8TCfgDVhYDYNvkAGN8dHERH+ArF/qyS5BYwHcNFP4CcEVIAgWhP47LbAIACwPjb3f0GRAci2m8uSEC6A4j0h4SMA4gaMEKSA0j2e0LSgYi2B4CBkAAA5PsdIQlIKAAYgsoCRGqT5pxK/MIcQEWFDmC0CRBY36KqlYlAUgCVjqi6K7KDMioLkDSAvrG6rmvWa/1w1U2XWQcyBFzNc9eX1r2rGp13IGcAk7sD2Kp5w4GqS92++r7vX01V3VzV0gGg6rIc9lCFFXUEUHVZtW71bTVVbznQP8kALECZW1BZgK3eBlxjDoAMqMrWqfRF9UtbyAOkHaG9P5/P5/2h9cNV1KMsTWBjBuNRpm4B3a31O4DWj9DQR8AJUJaVU1C8Abh/80bCAYDsERVTSAJIwGtUvl1lAFLGvywekHMgl48vlXcgN/vzDtDIfUSGD8lbDnDeRwfgoiXx+tQInDN/ZW5KoULGY/+yH/AY1xJxVOd1tzFxVuEaUkJU59Svls8DSbSf4lT9ByndsCyhlnWqAAAAAElFTkSuQmCC" />
              </defs>
            </svg>
            <p>Data Insights with Google Sheets</p>
          </div>
          <div className='text-center flex flex-row items-center gap-5'>
            <svg viewBox="0 0 48 48" width={25} height={25}>
              <path fill="#F4B400" d="M6 2h26l10 10v34a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
              <rect x="14" y="18" width="20" height="14" fill="#FFF" />
            </svg>
            <p>Present with Google Slides</p>
          </div>
          <div className='text-center flex flex-row items-center gap-5'>
            <svg
              viewBox="0 0 254 349.247"
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
            >
              <g transform="scale(11.905878)">
                <path fill="#00832D" d="M7.334,22H0v5.334c0,1.105,0.895,2,2,2h5.334V22z" />
                <path fill="#FFBA00" d="M7.334,0H2C0.895,0,0,0.895,0,2v20h7.334V7.334H14V0H7.334z" />
                <path fill="#0066DA" d="M21.334,22H14v7.334h5.334c1.105,0,2-0.895,2-2V22z" />
                <path fill="#00AC47" d="M14,22H7.334v7.334H14V22z" />
                <path fill="#2684FC" d="M14,7.334V22h7.334V7.334H14z" />
                <path fill="#EA4335" d="M14,0v7.334h7.334L14,0z" />
              </g>
            </svg>
            <p>Surveys, To-dos and Many More</p>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <h1 className='font-bold py-3 mt-3'>Control</h1>
          <div className='text-center flex flex-row items-center gap-5'>
            <svg
              width={25}
              height={23}
              viewBox="0 0 25 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="25" height="22.66" fill="url(#pattern0_1_1415)" />
              <defs>
                <pattern
                  id="pattern0_1_1415"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    href="#image0_1_1415"
                    transform="scale(0.015625 0.0172385)"
                  />
                </pattern>
                <image
                  id="image0_1_1415"
                  width="64"
                  height="58"
                  preserveAspectRatio="none"
                  href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA6CAMAAAA3Dq9LAAAAOVBMVEUfh/wFePze7fwZctwBZNcUgfz6/f8Aadr///8li/0BV9Xq9P86lf2+2vtSof11sPecxvgOd+pMi+PxyDh7AAAACXBIWXMAAAsTAAALEwEAmpwYAAACt0lEQVR4nJ1X2baDIAwMypKgqO3/f+w9oGISsLU3py8tMJ1MFgKgNI/op0HaVM2r3YgI+odhfY/KaK62ps8AHrcxRivtBa6aMesnAI8p2iDNBiI4jQg0Aohv0xjV+WBf1/mCYVIW6gZga88HeR7IkZAShIBWOxAsKAAgs3IKwBV4f3WgmBu6DDymjgPtcSCzMArAwB4SAOA6wkXggYInhbnHYBpbBV0XAMhsHYD1qQNZxiuUcB/CroJNKOHHEB4AYE8doYbQhkyh8ChcbLhqyDkF8IpvxeDdEAhXEc8zCQRyNsQkADZD90LnEBELCFGwwY7CBXDEDcgtvGQ8boY7kH2Mu45QlldNQCRb2bLULQS7RuOQt0BeHNzniithrnuyA9niWl1YNQHnJnmcbdodKAjpAEjMv56CQkeCg0AI8X0AzCrlRbFwHUkQCCFu6OFc+KDgaVnHnAJXro4TQqb2VcGdwuC4A4eO0FEQWgV3hNVwB0riDzC1CnQUPHU0qmRjgqGJwHJ3HjEJBzKF9AuA7wJMrQvpFmHWLtjUE1FePYzApkUMdgAc4FkYMe/shNF3StGVOmsIlETiFHJBAqLnzeJWR3+UzFmLNZUxF1PTjjo6+l3toxvsBM5yXhQCOWhd2G7L2WN61FAc64i1mvE/LW0vSLtfDVDWp1xnH3Q8Fbxpqvi9rR8KHmtZR9nWsXM1jwszme+ZQjz+AA6KW9xvtvzZsfLVZs6PzpSgrzbsXa4300FxIsrLFfsD0j3ANSZB1fmnAePqelCFnp4MiW2IgOXqUwpiWAUW66c6inEZ8Oc5T2Yp/GfU5XUCPGGH3qz7fNjGZ7OiurhAAAzfp1V9cQH/knXsPHn4cTJieGpfbZuN1gb25MpO1IblnFnUzds8+9KqX30jzef0Ni+bbpYawCPqd+fnl+cfa+BS1dTDMykAAAAASUVORK5CYII="
                />
              </defs>
            </svg>
            <p>Basic Security & Admin Control</p>
          </div>
          <div className='text-center flex flex-row items-center gap-5'>
            <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <rect width={25} height={25} fill="url(#pattern0_1_1419)" />
              <defs>
                <pattern id="pattern0_1_1419" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use href="#image0_1_1419" transform="scale(0.015625)" />
                </pattern>
                <image id="image0_1_1419" width={64} height={64} preserveAspectRatio="none" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAY1BMVEX19fb////z+P9epfz//vYqivwzj/339/Y5kv0ujf0oeeglgvQXgP0nf+8Nev0UePMfhf1wr/7y8/WEuPuuz/0JXNpQnvxcnvP4/P/A1/ba6Paaxf0abeMFcPeRsuZllOBBfdzEcHSwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE+UlEQVR4nKWX7ZKjKhCGNdINKEEEJCvGJPd/lVuNUcFk5lTt6R9TmZm8D/1FA1VN9udfLCnrqq7ri3fDP5i/vAGXRiGiwMNkblCaAWNM+qFFTIBLowNKlOJsGfGDTBDUeCGA1wHF4EJJwBOgcEoaMQxoxDLXdfVnQCHmyfsGTsvnv5z0wXs/C6OaS11dGiGHaZ79TKvmBkbpZMqULoBxfp79sAEQ0+8lwCglQ+PImoBKK0l52tI6k8DB7kHw3k/uCAGNEs5HzhkZ59E70WvY3VDN5L0PewhCNvPsjqCNarxdpcnSx6khxBbDMM+N2T0QAoSATQ8qTIyxqjCCTLdFoQQpQYKSoAAPgDiWVzAzxkv5xvDdAiQHagQAmQF2UyEybr/oq8pyFm8LYGpISuU3gB74yfkCwZhbOoTVjR2Amd79tPzuhFu6Vf4NoIff9VVlK+YoD989UIF/6M/ptJzdlh8AAJHl+rWNUhMUeYht/z0ENRd6ap7ZOTdPtkBY5u9GfgGYkH2NSuaEWfcSDjFrLFux5/0LANV0OGA5n0GbdURIo5WzGbyOY/uZA9McDlhWDdokMUgUKGAp8sue41WeAcofXrKq0TSUjDLGKEUf5iIL03i/FgAURlQ7gDOnaVmNw+y9E0prnzeI5ew1tl0J0O6IgE1a0q50cS2iU76oT2XZY2zbrghBHRGwKiiBoPxaPc5YZNUJMI1t23Y7AAXIeAAmOif0vLvEPxqcVa9727b9ATBh34WcDZra2qY/sNx2AGfPsW2v9wOgGr6txyphBL5D4nE6LPIToL/tANqHGyBKEAZTSFQPOoSommY5FqlSFncAFkVgEWCLgLNZvTc/SB1+AojfAHSopHmOPwPwC0BsISxaKa0NAuqfQpBY5sAKI8BMaxGmdDi5xsjfAerGt/9yRhthI74L6DRi0azPMyAc05jNmhrx3Vmcc8usVAhqdWov4zUDoIGsEy9SCaGkpQWtJS8ackDwfUekTiwAqPPd7LSQQkk64cjsoEFK7bJv0F44AVwWoA1aSFSqmWKMk0MNUmhxjNx1N26AQOc+KnEkwbIIWiCCVnQKaiWlUDqbeGkelAAp+3wkEkESgmaSlIhaZyPb1tNIKSg8QH3LhzKLQev1xEeUaoGJUTqLIl673AOE3IXKMjvTKNPpmgRDzPSWxfv9BMC3C8Xcs5Nrgghh8JHl7N2BwgOJsBQnk6Um5JVNJ1w+kdYMUAq6dSIFWC8+qK7l2WipC+meVAxEy/haAvKgAEhcbp+n89neAaQIzgAJy3Aav596Wz/WALpPAEhYHv9xQ6ly/acHSIS84OflGcv1HwBJPjzplvYVYas6PrcCnAGQ7m10c1naB6u/xGGrmk2vQp8BjIE0fekeqsbnRIiidpbXLD7HNf9UwK7vM4AJjq6+mxP38Tnxus6Otrrm03Ok5d/1C86FfgcYQbf1QW3PI3kdx9djohas65omyvR4bfJVT7d10e+AIb0XpNlvkNf7fRxfr+eD7Pl6jat8Dz89MJxaSgBsZxAAXNu2vY+bJXGSv+u/Ag4PcPbeN3sIZF17MlLv5aMXCoUQLnVVz4tQ9Goz5fuwO2uv124rX9cL50QvF5fejaAFvSS358i2tbpdmC++Ebq+l7qP6eUau8UoRdex0vq+b/vvRv9TS+/fb+fomq92+90cvXwToK4v/2LH6/1/2V+MFIbcpx+utQAAAABJRU5ErkJggg==" />
              </defs>
            </svg>
            <p>Standard Endpoint Management</p>
          </div>
          <div className='text-center flex flex-row items-center gap-5'>
            <svg width={25} height={18} viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <rect width={25} height={17.97} fill="url(#pattern0_1_1423)" />
              <defs>
                <pattern id="pattern0_1_1423" patternContentUnits="objectBoundingBox" width={1} height={1}>
                  <use href="#image0_1_1423" transform="scale(0.015625 0.0217376)" />
                </pattern>
                <image id="image0_1_1423" width={64} height={46} preserveAspectRatio="none" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAuCAMAAACvSe/GAAAAe1BMVEX///89k/0rhPT9/v8hhvwlif0sjPwwjf06kv00j/0nhfc3kP0oif3q7O8YgP349+8ugO3//e7w8e///vFTnfkId/w1ifRrq/sRaeVJmPkbffYYcuy00fWex/n1+f/E2/iEufrs9P/U3+yYtuYud+LZ6f5RjONxn+RHi+qNt/llAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEN0lEQVR4nJWWiXKjOhBFJbSjzeyYJWDjJf//ha9aAoI9k7xMVyqucnKPrrpbLSF0DEIQQZf7NAzDMN0v8ZvfB0EIXcamxIYyRo0sm/HyDwhCEJkabAxXEmMptTDU4Ob+WwQh6N4YrjDGWGIppcQYa0FZc/8VgRAycgPqII6htZTKifEXBIIuDdXnd73WSkvumo+Qn5/1ZxeWPwBAr7VSUrry8jOBoAum54NcH/RKaezKHz0Q9FG+6FcratUrJV3zs4HZRT0AsOTUUeco1xIAgSKr+XsLBE30IGcUN/M4zo12NFqAEG76nvAhxQbAwpWDzULY8dwJGeVCuvN3xSRopPv6ho4+87m11uY+83OXSgF6IVQ1/N0CQeQsMOQN9GbKcmvzoiiK3FqfDV2qg17oQyVerBA0mG19QacM5P46DFcPiGzoeAQI5Sb0AUFeEQQ1AAjlc2MGyy6PW9/fHkOR2zybqzoCBBexVOU8XKD1N8LlLFY9K7Pcev9s+1NdJ3379Ln1ed0pHgmGhnDOqflwwiYTD5/Ebshs7p9tHULW/TPLbbH0q4Nog3MhOK3YuKd0pKsBfs69LRbQh9pp0Q+Z9ddbGrPADyFotZ+w2WwGmizP/We/AYTuSvjm0dfvemM4r9aqkIZugDmzxQT7X/tXs/TqbfFsT1zwN4AxvIrng+wAOma2GPqgj/1roKzF0p5ORwOgNoYxXoU8kC8HbwChDb2ugOTgYNUzQxmMCfKyhWwKgNj/at8CEF4AoDc8HFHSsADQMYn5Z7emEHovJhEcJMmrHn5xp+DqGIMDraXB1tti7Gst4vHhVSxjHwDJu54ZVg0IoQEAYXx1oZHKvoYaaCWqJjRSewv6SNj1YRfVjBC6C4WDXtLQynlZUcM5c1WTeevtLe4gEvb9M4hYSVKaCNCqW8JhGnHqHD0Pmbd5qMEGSF71zMRmmmm8AZTk3bWA45xfh+nqw2TI7ZpDiDQ9+IdwZwDcuVrnt6Sna+HDMApjyXtri/zR1ps+SY96ysABIqihYfwGQr/4YhtphQVD3n8GQhpj988o5VUDrYjubhu+Qpv+MViYaEVml1sbCHkgrICwi6insQoIocbhtf2FUl17ey7LsjxvbdveNsKuT9NdT2noA0TQRbGdIDTv2xD96XTqNw/9GwHkJnYigpulUuECEEIJLtRpj7qPHuyp+yLA+yUA9uuKoLECB/vgWuVJktR9fy2gnb4AcTJSyhzdL22C5krow+hL9t4JhPzRrllkKd0ILM4DtHsw6xXyB+G2PNrTCtiWB31zuKoIQVPtDib4pk+SpIN8gp7CT5Sb0ESvN9S9cSsinNtNnqbrx9GAcV9T+WiipI7t8/+rfwEReojStQmqbvzzzUII+pjmGt4WMbqXcHtUVXq8mY4EgtDHNDbncovz36IZvn/A/sOz9oe//X8c/v8/16Fp5UuskwcAAAAASUVORK5CYII=" />
              </defs>
            </svg>
            <p>Smart Search with Workspace</p>
          </div>
          <div className='text-center flex flex-row items-center gap-5'>
            <svg width={"25"} height={"23"} viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <rect width={"25"} height={"22.66"} fill="url(#pattern0_1_1427)" />
              <defs>
                <pattern id="pattern0_1_1427" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use href="#image0_1_1427" transform="scale(0.015625 0.0172385)" />
                </pattern>
                <image id="image0_1_1427" width={64} height={58} preserveAspectRatio="none" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA6CAMAAAA3Dq9LAAAAhFBMVEX///8qfOslg/X//vE4kf0ri/wyj/01kP0wjf0of+/w8O8tjf3r7O8seeU9k/0dg/0VffoPXNf39u8khvtRnv0xdd7T5v70+f/M4v2Gu/sadu0neekOa+nL1OYFcvsgcOOPsOTr4eHe7P7Y5fBsn+iyxOVwrfoeaNpakOKew/S+1O81g+sVk9GzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEfUlEQVR4nJ2XCXebOhCFDVpBgDbjDbwktvGS////ekYSsiBxX/puGzdJz/24Gs0IWCyi1v+ql3WxWKyfw/Jftf1MAI+D5SAiSCL7TTLRgb0IK4Wbb8JBzIlS6j8550LAxfBhiICtHE3RNhqdyfvAyoUQIaWwdhUB9r3/LYBwufk9wPtd/AgQCUDOF/4GIN4BrPeOX38B8OifJcAYewbzCMbwTyWghNAfAA/ZBDuWVpLmXQ2pUFJJOgVshu2wZD54g+2weWLZsBggBTCihueDSJECPonkloeFN3IwCJ25aqI/KQEjhy1C6KkmCVbUhw+AB6oqdCYKMswCOH9ZmbJVPE3QhPgOYJfGTAkRwMRhi+A/r7r2IzMCaLL5jbp4Qq4a6H3f/JRz4fxlVaG9vrWB8D0BxuxwQSnB/ZJywXj067ZuM0fwAJwmYBgnBMysAhGWXF+3bV3XHRBGAGYpIckgVTPAJltlZ/6szl5LoOkKWEponiVCCJnzVg1TfweEUEQct9FV3WcwpipRVSJTghA6u9JG/67vuzrz47ySklg+tg38S8cMQHECUlUm/q/Lfdd1hQOst81y2SS9zxhl7HApTVlVZVlV8FlWZWmeL//+4+PSZ93OzcL683O9lSnAER4I7L4G8J0x7bj+/vSx/7j2XbZ7jbPCrm1GYdlUBlzofDpdjWOhk3b+EXA8pgA5A6gtquD6J621bs/wg6naI/h/AaCM2A3yF721bavbEnYD3fXfACw5QfwKYO7A37b6BBHQaQaoJzVgyfBhuYRNcHMD69b3kKfu3gEkpmFwYfywbDzgdgN/3V9+BEx2gUW7A2C3BNg5AGjY0wjI/hNAGZFPd82rvrkVmLGI2a8SUI5h+MBzPWrd32EsKlTdjnWWFe8A/GXnnFpyhkYqUXV9PF0rlmETimIOWLtWnt5/GPetDL2IEEwC7KlbQVFk/cnsTWzlNQwTi/dO7xeHLQRIh6ky52P/BYBi97U3H/cRsJLSSvG6+6bnr3HmOM7nY+8AxS67fPVdVngAo4xN/f78L9G+Qu5EMcjsS3dGHfsvABRwoGQB8MnIxD76oQ/b09nAND8v0Iue4ABFUbi1/ARI/Pqmb+39fm+1PupwTnYhgw/iADQFCAr+eP61x5vWrpnqOSEvilwFQHQHf3r+ekEHvwhgz4s8nwIEPH1wrrx/PP/quutc/6eEHQBA8wRcUDXAWfo6f6OgaoHw7CeAlXXPPV5cudv73A8lh6r3QDBltsvTBFYSaQOCqmWJ5v7CE2Dr+otB6DpNsNgMw2VJ/OOb4Gp5PY33zzRAUH+/no6hBjYAQA8Vn91UH86xDu6gYwFehL7fZeC3MQFo+wJwkYM/LV9IkMPe+++crP0RQIjI3e27+5bfGUe7nAF48pog8roL/okd/oySuc3fAogjpPvn7S9Z+Pt2CSQS0utPERb8JAXQCYCIvOucfUTEtfv6g99KGV84VgdLydiOnkAmu5fmh+uDRPLKs3io9HXKazeTe2BLdMDJa9t69e/apK99/1t/APIwpu+CIUw/AAAAAElFTkSuQmCC" />
              </defs>
            </svg>

            <p>Vault for eDiscovery</p>
          </div>
          <div className='text-center flex flex-row items-center gap-5'>
            <Icon icon="logos:google-drive" width={25}
              height={25} />
            <p>Backup options for Drive and Gmail</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingAndFeatures