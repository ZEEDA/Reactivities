using System;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities.Queries;

public class GetActivityList
{
    public class Query : IRequest<List<Activity>> { }

    public class Handler(AppDbContext context) : IRequestHandler<Query, List<Activity>>
    {
        public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
        {
            // Check for cancellation before proceeding with the query
            try
            {
                cancellationToken.ThrowIfCancellationRequested();
            }
            catch (System.Exception)
            {
                // Handle the cancellation request here if needed
                throw;
            }

            return await context.Activities.ToListAsync(cancellationToken);
        }
    }
}