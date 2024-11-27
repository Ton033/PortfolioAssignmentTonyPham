import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

/**
 * This test suite validates the HelloWorld component
 */
describe("HelloWorld.vue", () => {


  /**
   * Test 1: Check if the component renders the msg prop correctly
   */
  it("renders the msg properly", () => {
    const msg = "Vue App";
    const wrapper = shallowMount(HelloWorld, {
      props: {msg},
    });
    expect(wrapper.find("h1").text()).toBe(msg);
  });

  /**
   * Test 2: Check if components is craeted
   */
  it("creates the component successfully", () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.exists()).toBe(true);
  });
});