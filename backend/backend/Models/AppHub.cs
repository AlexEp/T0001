using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class AppHub : Hub
    {
        public override Task OnConnectedAsync()
        {
            base.OnConnectedAsync();
            return Clients.Caller.SendAsync("msg-event", "Connected!");
        }

        public async Task Subscribe()
        {
            await Groups.AddToGroupAsync(Context.ConnectionId,"MsgGroup");
        }

        public async Task UnSubscribe()
        {
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, "MsgGroup");
        }
    }
}
