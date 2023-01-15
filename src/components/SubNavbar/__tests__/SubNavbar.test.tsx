import { LIST_MOCK } from '../../../proxy/__mocks__/list.mock';
import { mockFetch } from '../../../utils/mocks/fetch';
import { getList } from '../../../proxy/list';
import { LIST_STUB } from '../../../proxy/__stubs__/list.stub';

describe('SubNavbar component', () => {
    it('Should call the services in the component', async () => {
        mockFetch(LIST_MOCK, 200, true)
        const result = await getList();
        expect(result).toEqual(LIST_STUB);
    })
})