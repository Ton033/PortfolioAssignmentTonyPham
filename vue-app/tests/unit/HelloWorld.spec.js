import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Hello Vue!';
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }, // Updated for Vue 3
    });
    expect(wrapper.find('h1').text()).toBe(msg);
  });

  it('has a link to Vue CLI documentation', () => {
    const wrapper = shallowMount(HelloWorld, {
      props: { msg: 'Test Message' }, // Updated for Vue 3
    });
    const link = wrapper.find('a[href="https://cli.vuejs.org"]');
    expect(link.exists()).toBe(true);
  });
});