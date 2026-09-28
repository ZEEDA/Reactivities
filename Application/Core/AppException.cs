using System;

namespace Application.Core;

public class AppException(int statusCode, string message, string? details)
{
    public int StatusCode { set; get; } = statusCode;
    public string Message { set; get; } = message;
    public string? Details { set; get; } = details;
}
