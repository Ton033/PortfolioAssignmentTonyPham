// vue-app/tests/unit/HelloWorld.spec.js
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Hello Vue!';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.find('h1').text()).toBe(msg);
  });

  it('has a link to Vue CLI documentation', () => {
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg: 'Test Message' },
    });
    const link = wrapper.find('a[href="https://cli.vuejs.org"]');
    expect(link.exists()).toBe(true);
  });
});