# Creating an Interactive Session for Debugging & Testing

Sometimes, submitting a batch script and waiting for the output isn't enough. If you need to debug your code in real-time—for example, using a `breakpoint()` in Python, you should use an Interactive Session.

An interactive session grants you direct access to a compute node's terminal, allowing you to run commands and see results instantly, including direct access to the GPUs.

## How to Launch an Interactive Session

To request a node for 30 minutes on a 40GB NVIDIA A100 GPU partition, use the `srun` command with the `--pty bash` flag:

```bash
srun --time=00:30:00 --partition=normal-a100-40 --account=f2025hpcvlab00005ubig --gpus=1 --pty bash
```

Breaking Down the Command:

| Flag	| Purpose |
|-------|---------|
| --time=00:30:00	| Sets a 30-minute limit for your session |
| --partition=... |	Specifies the hardware queue (in this case, the A100 GPUs) |
| --account=...	| Assigns the resource usage to your specific project account |
| --nodes=1	| Requests exactly one compute node |
| --pty bash |	Opens an interactive bash terminal on the allocated node |

### Verifying Your Access

Once your session starts, your terminal prompt will change (e.g., from login to something like `gnx506`). To confirm that you have successfully landed on a GPU node and that the hardware is available, run:

```
nvidia-smi
```

If successful, you will see a status table showing the A100-40GB GPU details. You are now ready to run your interactive tests!

> Tip: Remember to type exit or press Ctrl+D to end your session once you're finished. This frees up the GPU for other researchers and saves your project's allocated hours.