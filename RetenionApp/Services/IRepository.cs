using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RetenionApp.Services
{
    public interface IRepository<T>
    {
        Task Add(T item);

        Task Update(T item);

        Task Remove(T item);

        Task<T> Get(int id);

        Task<IQueryable<T>> All();
    }
}
