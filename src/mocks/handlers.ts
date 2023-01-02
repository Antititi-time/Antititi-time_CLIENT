import { rest } from 'msw';
import { Favorite } from './types';

export const handlers = [
  rest.get('/favorite', (_req, res, ctx) => {
    sleep(1000);
    return res(
      ctx.json<Favorite[]>([
        {
          id: '1',
          mint: '코 끝에선 화➰❤️ 입안에선 후➰💚 때론 달콤하게🍫 때론 시큰하게🌿민트초코가 세상을 지배한다🍦 코 끝에선 화➰❤️ 입안에선 후➰💚 때론 달콤하게🍫 때론 시큰하게🌿민트초코가 세상을 지배한다🍦 코 끝에선 화➰❤️ 입안에선 후➰💚 때론 달콤하게🍫 때론 시큰하게🌿민트초코가 세상을 지배한다🍦 코 끝에선 화➰❤️ 입안에선 후➰💚 때론 달콤하게🍫 때론 시큰하게🌿민트초코가 세상을 지배한다🍦 코 끝에선 화➰❤️ 입안에선 후➰💚 때론 달콤하게🍫 때론 시큰하게🌿민트초코가 세상을 지배한다🍦 코 끝에선 화➰❤️ 입안에선 후➰💚 때론 달콤하게🍫 때론 시큰하게🌿',
          choco:
            '우리👩‍👩‍👧민초🍃🍫배척😫하지마세요🙅‍♀️ 님이👤민초🍃🍫보다 초코칩🍪있어?😑 님이👤민초🍃🍫보다 박하맛🍃이나?🤨 님이👤민초🍃🍫보다 청록색🧤이야?😤 다시는...❌ 민초🍃🍫 무시🤷‍♀️하지마🖕🏻 민초러👩‍🌾들은 퍼가💚',
        },
      ]),
    );
  }),
];

async function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
