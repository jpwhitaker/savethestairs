import { ArrowRightIcon, InformationCircleIcon } from '@heroicons/react/20/solid'
import { Permanent_Marker, Inconsolata} from 'next/font/google'



const permanentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
})

const inconsolata = Inconsolata({
  subsets: ['latin'],
})

export default function Example() {

  return (
    <div className="px-6  lg:px-8">
      <div className="mx-auto  text-base leading-7 text-gray-700">
        
        <h1 className={`${permanentMarker.className} heading  mt-2 text-3xl font-bold tracking-tight text-red-600 sm:text-6xl`}>Save The Stairs</h1>

        <p className={`${inconsolata.className} text-base font-semibold leading-7 text-lg text-gray-600`}>Artist Collective</p>
        
        <p className="mt-6 text-xl leading-8">

           {`A collection of art, posters, paintings, and stickers from artists in Hawai'i, protesting the removal of the Hai'kū Stairs.`}
        </p>
        <div className="mt-10 max-w-2xl">

          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
          <li className="flex gap-x-3">
              <ArrowRightIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
              <span>
                <strong className="font-semibold text-gray-900">Make Art.</strong> Make your voice heard!  If you have a piece of art that you would like to showcase, please reach out to us!  We would love to feature it here with a link to your website or socials.
              </span>
            </li>
          
            <li className="flex gap-x-3">
              <ArrowRightIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
              <span>
                <strong className="font-semibold text-gray-900">Support Local Artists.</strong> Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                blanditiis ratione.
              </span>
            </li>

            <li className="flex gap-x-3">
              <ArrowRightIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
              <span>
                <strong className="font-semibold text-gray-900">Join the Movement.</strong> <a href="https://www.haikustairs.org/">Friends of {`Ha'iku`}</a> is a non-profit that has been fighting this fight since 1987.
                They are our best hope for saving the stairs.  Donate to their legal fund, buy some merch and come to protests.
              </span>
            </li>
          </ul>
          {/* <p className="mt-8">
            Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
            fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
            adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
          </p> */}
        </div>
      </div>
    </div>
  )
}
