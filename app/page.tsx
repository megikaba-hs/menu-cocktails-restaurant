import MenuSection from '@/components/MenuSection'
import RestaurantMenuSection from '@/components/RestaurantMenuSection'
import { menu } from '@/data/menu'
import { restaurantMenu } from '@/data/restaurantMenu'

export default function Home() {
  return (
    <div className='mx-auto min-h-screen max-w-3xl p-4'>
      <div className="rounded-2xl bg-[url('/images/orange-coctails.jpg')] bg-contain">
        <section className='mb-8 rounded-2xl bg-white p-8 text-center shadow-lg'>
          <h1 className='text-4xl font-bold text-[#cc5a2e]'>
            Cocktails Menu 🍸
          </h1>
        </section>

        {menu.map(section => (
          <MenuSection
            key={section.category}
            category={section.category}
            items={section.items}
          />
        ))}
      </div>

      <div className="rounded-2xl bg-[url('/images/brunch.jpg')] bg-contain">
        <section className='mb-8 rounded-2xl bg-white p-8 text-center shadow-lg'>
          <h1 className='text-4xl font-bold text-[#cc5a2e]'>
            Restaurant Menu 🍽️
          </h1>
        </section>

        {restaurantMenu.map(section => (
          <RestaurantMenuSection
            key={section.category}
            category={section.category}
            items={section.items}
          />
        ))}
      </div>
    </div>
  )
}
