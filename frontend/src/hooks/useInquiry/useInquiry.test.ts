import { renderHook } from '@testing-library/react';
import { useInquiry } from './useInquiry';
import { useDataFactory } from '../useDataFactory/useData.Factory';

jest.mock('../useDataFactory/useData.Factory', () => ({
  useDataFactory: jest.fn().mockReturnValue({
    data: [{ id: 1, name: 'test' }],
    isLoading: false,
    isError: false,
  }),
}));

jest.mock('../../hooks', () => ({
  useAPI: jest.fn().mockReturnValue({
    fetchData: jest.fn(),
  }),
}));

describe('useInquiry', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly without an id', () => {
    (useDataFactory as jest.Mock).mockReturnValueOnce({
      data: [{ id: 1, name: 'test' }],
      isLoading: false,
      isError: false,
    });

    jest.mock('../../hooks', () => ({
      useAPI: jest.fn().mockReturnValue({
        fetchData: jest.fn(),
      }),
    }));

    const { result } = renderHook(() => useInquiry());

    expect(useDataFactory).toHaveBeenCalledWith(
      expect.objectContaining({
        endPoint: 'inquiry',
        dataId: '',
      })
    );
    expect(result.current.data.length).toEqual(1);
    expect(result.current.data[0]).toEqual({ id: 1, name: 'test' });
  });

  it('renders correctly with an id', () => {
    (useDataFactory as jest.Mock).mockReturnValueOnce({
      data: [{ id: 1, name: 'test' }],
      isLoading: false,
      isError: false,
    });

    jest.mock('../../hooks', () => ({
      useAPI: jest.fn().mockReturnValue({
        fetchData: jest.fn(),
      }),
    }));

    const { result } = renderHook(() => useInquiry('test'));

    expect(useDataFactory).toHaveBeenCalledWith(
      expect.objectContaining({
        endPoint: 'inquiry',
        dataId: 'test',
      })
    );
    expect(result.current.data.length).toEqual(1);
    expect(result.current.data[0]).toEqual({ id: 1, name: 'test' });
  });

  it('renders correctly when loading', () => {
    (useDataFactory as jest.Mock).mockReturnValueOnce({
      data: [{ id: 1, name: 'test' }],
      isLoading: true,
      isError: false,
    });

    jest.mock('../../hooks', () => ({
      useAPI: jest.fn().mockReturnValue({
        fetchData: jest.fn(),
      }),
    }));

    const { result } = renderHook(() => useInquiry());

    expect(result.current.data.length).toEqual(0);
  });

  it('renders correctly when error', () => {
    (useDataFactory as jest.Mock).mockReturnValueOnce({
      data: [{ id: 1, name: 'test' }],
      isLoading: false,
      isError: true,
    });

    jest.mock('../../hooks', () => ({
      useAPI: jest.fn().mockReturnValue({
        fetchData: jest.fn(),
      }),
    }));

    const { result } = renderHook(() => useInquiry());

    expect(result.current.data.length).toEqual(0);
  });
});
