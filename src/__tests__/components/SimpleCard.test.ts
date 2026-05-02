import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import type { SimpleCardProps } from '../../typings/interfaces'
import SimpleCard from '../../components/SimpleCard.vue'

describe('SimpleCard', () => {
  it('should test SimpleCard render', () => {
    const componentProps: SimpleCardProps = {
      item: {
        id: 4,
        name: 'PC',
        slug: 'pc',
        games_count: 560911,
        image_background:
          'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        image: null,
        year_start: null,
        year_end: null,
        games: [
          { id: 3498, slug: 'grand-theft-auto-v', name: 'Grand Theft Auto V', added: 22574 },
          {
            id: 3328,
            slug: 'the-witcher-3-wild-hunt',
            name: 'The Witcher 3: Wild Hunt',
            added: 22216,
          },
          { id: 4200, slug: 'portal-2', name: 'Portal 2', added: 20888 },
          {
            id: 4291,
            slug: 'counter-strike-global-offensive',
            name: 'Counter-Strike: Global Offensive',
            added: 18361,
          },
          { id: 5286, slug: 'tomb-raider', name: 'Tomb Raider (2013)', added: 17820 },
          { id: 13536, slug: 'portal', name: 'Portal', added: 17812 },
        ],
      },
    }
    const simpleCard = mount(SimpleCard, {
      props: componentProps,
    })
    expect(simpleCard.text()).toContain('PC')
  })
})
