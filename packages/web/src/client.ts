import * as sapper from '@sapper/app';
import wasm from '../../wasm/Cargo.toml';

const init = async () => {
  const core = await wasm()

 	return core
};

init().then((wasm) => {
  console.log('[RUST MODULES]', wasm);


	sapper.start({
		target: document.body,
		props: {
			wasm
		}
	})}
)

