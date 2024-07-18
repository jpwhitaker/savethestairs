import { Permanent_Marker, Inconsolata} from 'next/font/google'



const permanentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
})

export function Artists() {
  return (
    <div className="py-16   px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className={`${permanentMarker.className} heading text-3xl font-bold tracking-tight text-gray-800	 sm:text-4xl`}>Artists</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          {/* {"We’re a collection of artists from Hawai'i inspired by unique beauty of the Hai'ku Stairs"} */}

        </p>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20  xl:grid-cols-3">
        <ul
          hometown="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-3"
        >
          {people.map((person) => (
            <li key={person.name} className="flex flex-col h-full">
              <img
                alt=""
                src={person.imageUrl}
                className="aspect-[2/3] w-full rounded-2xl object-cover"
              />
              <div className="flex items-center space-x-4 mt-6">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">{person.name}</h3>
                  <p className="text-base leading-7 text-gray-600">{person.hometown}</p>
                  <IgIcon person={person} />
                </div>
                <img
                  alt=""
                  src={person.artistImageUrl}
                  className="w-12 h-12 rounded-full object-cover self-center"
                />
              </div>
              <div className="flex flex-col h-full">
                <p className="mt-4 mb-6 text-base leading-7 text-gray-600">{person.bio}</p>
                <div className="mt-auto flex justify-between">
  
    
  {person.shopURL && (
    <span className="flex items-center space-x-1 ml-auto text-red-600">

<a href={person.shopURL} className="hover:bg-red-600 hover:text-white border border-red-600 rounded py-0.5 px-2 flex items-center space-x-1">
  <span>Visit Shop</span>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
  </svg>
</a>
    </span>
  )}
</div>
              </div>
            </li>
          ))}

        </ul>
      </div>
    </div>
  );
}

const IgIcon = ({person}) => {
  
  if (person.instagramURL === null) {
    return null;
  }

  return (
    <a href={`https://www.instagram.com/${person.instagramURL}/`} className="text-gray-400 hover:text-red-600 hover:cursor-pointer flex items-center">
      <span className="sr-only">Instagram</span>
      <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
      <span className='px-2'>{`@${person.instagramURL}`}</span>
    </a>
  )
  
}


const people = [
  {
    name: 'JP Whitaker',
    hometown: "'Aiea",
    imageUrl: './artwork/jp-haiku.jpg',
    bio: `JP is a software engineer who dabbles in art.  He enjoys hiking and sailing.  Previously involved with the fight for saving to Koko Crater hike, he became passionate about preserving outdoor access.`,
    artistImageUrl: './artists/jp.jpg',
    instagramURL: null,
    shopURL: null,
  },
  {
    name: 'Lisa Esqueda',
    hometown: 'North Shore',
    imageUrl: './artwork/lisa-stairs.jpg',
    bio: `Lisa Esqueda is a passionate North Shore artist whose love for the Hawaiian Islands shines in her bold, vibrant, and imaginative works of art. 
        Painting in traditional oils she enjoys the challenge of creating both indoors, outdoors, and experimenting with new subject matter and styles.
        `,
    artistImageUrl: './artists/lisa.jpg',
    instagramURL: 'lisaesquedaart',
    shopURL: 'https://www.lisaesquedaart.com/'
  },
  {
    name: 'Melissa Oshiro',
    hometown: "Nu'uanu",
    imageUrl: './artwork/melissa-stairs.jpg',
    bio: `Melissa's art reflects her Hawai'i roots.  Local food, plants and animals are common themes in her vibrant paintings and illustrations.`,
    artistImageUrl: './artists/melissa.jpg',
    instagramURL: 'woshiwoshiro',
  },
  {
    name: 'Hitsuji',
    hometown: 'Mililani',
    imageUrl: './artwork/hitsuji-stairs.jpg',
    bio: `Hitsuji is an artist, comic creator and video game designer.  Her work, while bold and dynamic, often explores the mundanity of Hawaii's middle class.`,
    artistImageUrl: './artists/hitsuji.jpg',
    instagramURL: 'hitsujigoods',
    shopURL: 'https://hitsujigoods.com'
  },
  {
    name: 'Gabi Pangilinan',
    hometown: 'Mililani',
    imageUrl: './artwork/chubs-stairs.jpg',
    bio: `Gabi is a graphic designer by day, small artist after hours. She draws chubi (chubby) cats in forms of food and cute silly scenes. `,
    artistImageUrl: './artists/gabi.jpg',
    instagramURL: 'cultofchubs',
    shopURL: 'https://cultofchubs.com/'
  },
  {
    name: 'TONK',
    hometown: "'Aiea",
    imageUrl: './artwork/tonk-stairs.jpg',
    bio: `TONK is a street artist from 'Aiea.  His murals and characters can be seen all over the island.`,
    artistImageUrl: './artists/tonk.jpg',
    instagramURL: 'tonk_hawaii',
  },
];